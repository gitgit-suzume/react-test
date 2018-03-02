##项目介绍

> 一个用于做测试题的纯前端页面，主要用于熟悉react技术栈，请用浏览器的移动模式浏览

## 运行项目

```bash

# 克隆项目
git clone https://github.com/gitgit-suzume/react-test.git

#进入项目文件夹
cd react-test

#下载依赖包
npm i

#运行项目(端口为8800)
npm start

```

# React学习笔记
--------------
## Redux
redux是为了让state的变化变得可预测。

> 三大原则

    * 单一数据源state
    * state只读，修改必须提交dispatch，集中化处理
    * action中修改必须为纯函数，就是函数中不能修改外面的值。redux设想开发者永远不会变动数据，只能将变动结果通过return返回

> action

描述发生了发生了什么，并将数据从应用传到store。
* 尽量在action中传递更少量的数据

> state

    Redux应用中，所有state都被保存在一个单一对象
    ##### 注意：
    * 建议尽量把不同类型的数据分开。
    * 大型应用建议让每个数据有个id主键，方便应用中数据相互引用,有点像数据库。
    * 尽可能把state规范化，不存在嵌套

> reducer

根据action更新state
    ##### 注意：
    保证reducer的纯净——单纯执行计算。传入相同操作，返回相同的值。并且没有副作用、api请求、变量修改。
    不要在reducer中进行如下操作：
        * 修改传入参数
        * 执行有副作用的操作，如api请求和路由跳转
        * 调用非纯函数，比如Date.now()、Math.rando()
        * return的时候不能在state上修改，要建一个副本修改并且返回。
        * 未知情况下应返回旧的state
