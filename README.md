# my-demo
react-project

## react心得
  react没有去劫持数据监听去触发render做渲染，而是通过setState来触发render,完成视图更新。
  如果只是改变state中的数据，视图是不会更新的。

  ### React Diff
  #### React Diff概念
  当数据发生改变，触发render时，通过Diff算法计算出DOM发生改变的位置，再对有修改的DOM进行视图更新。
  这样就不用重新渲染整个DOM，避免多余的DOM操作。最大程度的减少浏览器的重绘和回流。

  #### React Diff -- Virtual DOM
  ##### 概念
  一个以JS对象为基础的虚拟树。对象包括DOM节点的所有属性，如display、className、type、children等
  通过渲染，可以将对象映射到真实环境上。


## react-router
```npm install --save react-router
```
