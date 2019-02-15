# Router
### 创建路由
```
ng generate module my-module --routing
```
imports中导入路由模块
```
RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- 路由信息打印
    )
```

### 导入路由

```
import { RouterModule, Routes } from '@angular/router';
```

### 默认路由 通配符路由
pathMatch定义匹配策略，必须为full

```
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
  { path: '**', component: PageNotFoundComponent }

```