var CalculatorApp = angular.module('CalculatorApp', []);
//set default values for all buttons.
CalculatorApp.constant("$numpadConfig", {
//	List of buttons. 
//	if needed something like engeneering calculator it can be extended with new values like
//	{
//			name:Pi,
//			value:3.14
//	},
	digits : [
		{
			name:1,
			value:1
		},
		{
			name:2,
			value:2
		},
		{
			name:3,
			value:3
		},
		{
			name:4,
			value:4
		},
		{
			name:5,
			value:5
		},
		{
			name:6,
			value:6
		},
		{
			name:7,
			value:7
		},
		{
			name:8,
			value:8
		},
		{
			name:9,
			value:9
		},
		{
			name:0,
			value:0
		},
		{
			name:'.',
			value:'.'
		},
	],
    operations : [
		{
			name: '+',
			func: 'Add'
		},
		{
			name: '-',
			func: 'Minus'
		},
		{
			name: '/',
			func: 'Divide'
		},
		{
			name: '*',
			func: 'Multiply'
		}
	]
})
