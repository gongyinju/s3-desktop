# s3-mobile-local

> 新框架移动端基础架构

## 前置条件

如果还没有安装Node和Npm，请移步http://109.6.13.48/nfc-chent/doc-base/tree/master 按照教程安装node、npm后，再来本项目。



## 下载框架

```bash
# cd到你想要存放的文件
cd /d/www/s3/

# 下载框架
git clone http://109.6.13.48/nfc-chent/vue-s3-desktop.git
```

## 框架结构

下面是框架的整体结构

```bash
├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build-components.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   ├── webpack.components.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── mocks                            express本地服务
    │   └── usermanage                        
    │   └── hello.js
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             项目源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   └── xxx.vue
    │   ├── assets                          # 资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes                          # 前端路由
    │   │   └── index.js
    |   |   |--- router-export.js           # 个性化导出组件配置
    │   ├── store                           # 应用级数据(全局)
    │   │   └── index.js
    │   └── views                           # 页面目录
    │       ├── hello.vue
    │       └── notfound.vue
    ├── static                               # 纯静态资源，不会被wabpack构建。
```
其中，`src`文件夹为项目开发目录，目录中，`assets`为项目资源，`src/routes/`为路由配置，`src/store/`为状态配置，`src/views`为页面目录

## 安装依赖和运行

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080  
# 启动本地调试服务器
npm run dev

# build for production with minification
# 打包生产环境版本
npm run build

# build for production of async components
# 打包异步特色组件
npm run build-component
```

