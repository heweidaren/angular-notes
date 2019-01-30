## 组件与模板


## 单项数据绑定，从数据源到视图

  bing-targer痛等于[target];
  ```
  {{expression}}
  [target]="expression"
  bind-target="expression" 
  ```

## 从视图到数据源的单向绑定

```
(click)="statement"
on-target="statement"
```

## 双向

```
[(target)]="expression"
bindon-target="expression"
```

## 子组件访问父组件属性
```
  父 
    <app-test [hero]="name"></app-test>
```
子组件input接受父组件属性
```
  子
  @input() 
```


