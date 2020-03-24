export default {
    // title:'表格的标题',
    // menuType:'text',
    // page:true,
    // align:'center',
    // // 日期组件：默认不显示
    // // dateBtn:true,
    // // dateDefault:true,
    // //弹出按钮位置
    // menuPosition:'right',
    // // 按钮菜单宽度
    // menuWidth:220,
    // // 组件大小
    // size:'medium',
    // // 菜单栏对齐方式
    // menuAlign:'center',
    // columnBtn:false,
    // refreshBtn:false,
    // // 搜索框与按钮单独成行
    // searchMenuSpan:4,
    menu:false,
    refreshBtn: false,
    columnBtn: false,
    delBtn: false,
    editBtn: false,
    selection: false,
    selectClearBtn: false,
    addBtn: false,
    header: false,
    align: 'center',
    menuAlign: 'center',
    height: 'calc(100% - (80px))',
    menuWidth: 200,
    column:[
        {
            label:'标题',
            prop:'title',
        },
        {
            label:'提问人',
            prop:'sex'
        },{
            label:'阅读量',
            prop:'reading'
        },{
            label: "发布时间",
            prop: "date",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            searchSpan:10,
            searchRange:false,
            search:false
        }
    ],
};