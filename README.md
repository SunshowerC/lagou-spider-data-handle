# 拉勾爬虫echarts数据可视化

发出请求：
```
method: GET
path: /analysis/modelName     (modelName 为 爬取数据时对应的modelName; 即数据库对应集合)
callback data : {
	cityEmploymentNum: {
		'城市A': '招聘数量',
		'城市B': '招聘数量',
		...
	},
	cityEmploymentSalary:{
		'城市A': '6k以下招聘数','6k-10k招聘数','10k-20k招聘数','20k以上招聘数','总体平均工资',
		'城市B': '6k以下招聘数','6k-10k招聘数','10k-20k招聘数','20k以上招聘数','总体平均工资'
		...
	},
	companySizeSalary: {
		'城市A': [
			{_id: '企业规模程度1',sum: '该规模企业招聘数', aveSalary:'该规模企业平均工资'  },
			{_id: '企业规模程度2',sum: '该规模企业招聘数', aveSalary:'该规模企业平均工资'  },
			...
		],
		'城市B': 同上,
		...
	},
	workYearSalary:{
		'城市A': [
			{_id: '工作资历程度1',sum: '该工作资历招聘数', aveSalary:'该工作资历平均工资'  },
			{_id: '工作资历程度2',sum: '该工作资历招聘数', aveSalary:'该工作资历平均工资'  },
			...
		],
		'城市B': 同上,
		...
	},
	employmentLabel: {
		'关键词1': '出现次数',
		'关键词2': '出现次数',
		...
	}
}
```

获取数据并处理：
```
chartModule.setModelName("modelName");  //modelName 为 爬取数据时对应的modelName; 即数据库对应集合
chartModule.init();
```


参考demo:  public/spider-chart.html  <br>
[在线演示效果](http://www.chenwy.cn/spider-chart-frontend.html)

