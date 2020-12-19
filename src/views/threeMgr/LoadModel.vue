<template>
    <div>
        <h1>坐标位置是：</h1>

        <div id="loadContainer" style="width: 300px;height: 300px;"></div>


    </div>
</template>

<script>
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
    import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';

    export default {
        name: "LoadModel",
        data() {
            return {
                scene: new THREE.Scene(), //创建场景对象Scene
                camera: null,
                renderer: null,
                mesh: null,
                width: 0,
                height: 0,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.createModel();
                this.updateLight();
                this.updateCamera();
                this.render();
                this.controlEvent();
                this.animate();
                this.showAxis();
            },
            /**
             * OBJ文件加载  只加载obj文件中的几何信息，不加载材质文件.mtl
             */
            createModel() {
                let loader = new OBJLoader();
                // 没有材质文件，系统自动设置Phong网格材质
                loader.load('/models/heart/file/model.obj', (obj) => {
                    // 控制台查看返回结构：包含一个网格模型Mesh的组Group
                    console.log(obj);
                    this.scene.add(obj);
                    this.mesh = obj.children[0]; //获得心脏网格模型
                    this.mesh.scale.set(15, 15, 15); //网格模型缩放
                    // 创建一个纹理加载器
                    let textureLoader = new THREE.TextureLoader();

                    // // 加载颜色纹理
                    let texture = textureLoader.load('/models/heart/file/color.png');
                    this.mesh.material.map = texture;

                    // // 加载法线贴图，表面细节更丰富
                    let textureNormal = textureLoader.load('/models/heart/file/normal.png');
                    this.mesh.material.normalMap = textureNormal
                    // 设置深浅程度
                    this.mesh.material.normalScale.set(1.5, 1.5)

                    // 设置高光贴图，一个网格模型不同的区域反射光线的能力不同
                    let textureSpecular = textureLoader.load('/models/heart/file/Specular.png');
                    this.mesh.material.specularMap = textureSpecular;
                    this.mesh.material.specular.set(0xffffff);// 高光反射颜色
                    this.mesh.material.shininess = 100;// 高光高亮程度，默认30

                    // 设置环境贴图，反射周围环境，渲染更逼真
                    let textureCube = new THREE.CubeTextureLoader()
                        .setPath('/models/heart/env/')
                        .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
                    this.mesh.material.envMap = textureCube;
                })
            },

            /**
             * 光源设置
             */
            updateLight() {
                //点光源
                let point = new THREE.PointLight(0xffffff, 0.3);
                point.position.set(400, 200, 300); //点光源位置
                this.scene.add(point); //点光源添加到场景中
                //环境光
                let ambient = new THREE.AmbientLight(0xffffff, 0.8);
                this.scene.add(ambient);

                // 方向光1
                let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                directionalLight.position.set(400, 200, 300);
                this.scene.add(directionalLight);
                // 方向光2
             /*   let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                directionalLight.position.set(-400, -200, -300);
                this.scene.add(directionalLight);*/
            },

            /**
             * 相机设置
             */
            updateCamera() {
                // this.width = window.innerWidth; //窗口宽度
                this.width = 300; //窗口宽度
                this.height = 300; //窗口高度
                let k = this.width / this.height; //窗口宽高比
                let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
                //创建相机对象
                this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
                this.camera.position.set(200, 300, 200); //设置相机位置
                this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
            },

            /**
             * 创建渲染器对象
             */
            render() {
                let threeContainer = document.getElementById('loadContainer');
                this.renderer = new THREE.WebGLRenderer();
                this.renderer.setSize(this.width, this.height);//设置渲染区域尺寸
                // this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
                threeContainer.appendChild(this.renderer.domElement); //body元素中插入canvas对象
                //执行渲染操作   指定场景、相机作为参数
                this.renderer.render(this.scene, this.camera);
                // requestAnimationFrame(this.render); //请求再次执行渲染函数render，渲染下一帧
            },

            /**
             * 创建控件对象， 注意：要让鼠标控制旋转、缩放必须配合animate函数使用
             */
            controlEvent() {
                //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
                let controls = new OrbitControls(this.camera, this.renderer.domElement);
            },

            animate() {
                requestAnimationFrame(this.animate);
                /*    this.mesh.rotation.x += 0.01;
                    this.mesh.rotation.y += 0.02;*/
                this.renderer.render(this.scene, this.camera);
            },

            showAxis() {
                // 辅助坐标系   老版本AxisHelper 新版本AxesHelper
                let axisHelper = new THREE.AxisHelper(250);
                this.scene.add(axisHelper);
            },

        },
    }
</script>

<style scoped>

</style>
