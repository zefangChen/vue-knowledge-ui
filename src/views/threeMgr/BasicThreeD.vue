<template>
    <div id="threeContainer">

    </div>
</template>

<script>
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    export default {
        name: "BasicThreeD",
        data() {
            return {
                scene: new THREE.Scene(), //创建场景对象Scene
                camera: null,
                renderer: null,
                width: 0,
                height: 0
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
             * 创建网格模型
             */
            createModel() {
                // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
                let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
                let material = new THREE.MeshLambertMaterial({
                    color: 0x0000ff
                }); //材质对象Material
                let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
                this.scene.add(mesh); //网格模型添加到场景中
            },

            /**
             * 光源设置
             */
            updateLight() {
                //点光源
                let point = new THREE.PointLight(0xffffff);
                point.position.set(400, 200, 300); //点光源位置
                this.scene.add(point); //点光源添加到场景中

                // 两个点光源
                let point2 = new THREE.PointLight(0xffffff);
                point2.position.set(-400, -200, -300); //点光源位置
                this.scene.add(point2); //点光源添加到场景中

                //环境光
                let ambient = new THREE.AmbientLight(0x444444);
                this.scene.add(ambient);
            },

            /**
             * 相机设置
             */
            updateCamera() {
                // this.width = window.innerWidth; //窗口宽度
                this.width = 800; //窗口宽度
                this.height = window.innerHeight; //窗口高度
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
                let threeContainer = document.getElementById('threeContainer');
                this.renderer = new THREE.WebGLRenderer();
                this.renderer.setSize(this.width, this.height);//设置渲染区域尺寸
                this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
                threeContainer.appendChild(this.renderer.domElement); //body元素中插入canvas对象
                //执行渲染操作   指定场景、相机作为参数
                this.renderer.render(this.scene, this.camera);
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
