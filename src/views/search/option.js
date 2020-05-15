import {DIC} from '@/constant/dicConstant'
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
    // menuWidth:150,
    // // 组件大小
    // size:'large',
    // // 菜单栏对齐方式
    // menuAlign:'center',
    // columnBtn:false,
    // refreshBtn:false,
    // // 搜索框与按钮单独成行
    // searchMenuSpan:4,
    menu:false,
    index:true,
    indexLabel:'序号',
    indexWidth:80,
    refreshBtn: false,
    columnBtn: false,
    delBtn: false,
    editBtn: false,
    selection: false,
    selectClearBtn: false,
    addBtn: false,
    header: false,
    align: 'left',
    menuAlign: 'center',
    // height: 'calc(100%-80px)',
    column: [
        {
            label: '标题',
            prop: 'questionTitle',
        },
        // {
        //     label: '分类',
        //     prop: 'questionCategory',
        //     dicData:DIC.QUESTION_CATEGORY
        // },
        // {
        //     label: '内容',
        //     prop: 'questionDetail'
        // },
        // {
        //     label: '状态',
        //     prop: 'isResolve',
        //     dicData:DIC.IS_RESOLVE
        // },
        {
            label: "发布时间",
            prop: "createTime",
            type: "date",
            format: "yyyy-MM-dd",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            width:100
            // searchSpan: 10,
            // searchRange: false,
            // search: false
        }
    ],
};