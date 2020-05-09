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
    menuWidth:150,
    // // 组件大小
    // size:'large',
    // // 菜单栏对齐方式
    // menuAlign:'center',
    // columnBtn:false,
    // refreshBtn:false,
    // // 搜索框与按钮单独成行
    // searchMenuSpan:4,
    menu:true,
    index:true,
    indexLabel:'序号',
    indexWidth:50,
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
    column: [
        {
            label: '题目标题',
            prop: 'questionTitle',
        },
        {
            label: '回答内容',
            prop: 'content',
        }, {
            label: '状态',
            prop: 'isBest',
            dicData:DIC.IS_BEST
        }, {
            label: "回答时间",
            prop: "createTime",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            searchRange: false,
            search: false
        }
    ],
};