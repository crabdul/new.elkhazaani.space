import React, { Component } from 'react';
import * as THREE from 'three';
import './Canvas.css';

class Canvas extends Component {
    constructor(props) {
        super(props)

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        const scene = new THREE.Scene()
        // scene.background = new THREE.Color(0xffffff)
        const camera = new THREE.PerspectiveCamera(
            70,
            width / height,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.SphereGeometry(1, 10, 5)
        const material = new THREE.MeshBasicMaterial({
            color: 0xFF4040,
            wireframe: true,
        })
        const cube = new THREE.Mesh(geometry, material)

        camera.position.y = 0.2
        camera.position.z = 2.4
        scene.add(cube)
        renderer.setClearColor('#ffffff');
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
                className='canvas-wrapper'
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default Canvas;
