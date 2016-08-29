# 拉勾爬虫echarts数据可视化

请求获取后端返回原始数据：
method: GET
path: /analysis/modelName     (modelName 为 爬取数据时对应的modelName; 即数据库对应集合)
callback data : {
	
}

获取数据并处理：
```
chartModule.setModelName("modelName");  //modelName 为 爬取数据时对应的modelName; 即数据库对应集合
chartModule.init();
```


参考demo: public/spider-chart.html 

