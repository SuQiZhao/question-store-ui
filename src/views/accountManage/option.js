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
    menuWidth:180,
    // // 组件大小
    // size:'large',
    // // 菜单栏对齐方式
    // menuAlign:'center',
    // columnBtn:false,
    // refreshBtn:false,
    // // 搜索框与按钮单独成行
    // searchMenuSpan:4,
    menu:true,
    // index:true,
    // indexLabel:'序号',
    // indexWidth:60,
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
    // height: 'calc(100%-80px)',
    column: [
        {
            label: '用户名',
            prop: 'username',
        },
        {
            label: '昵称',
            prop: 'nickname',
        },
        {
            label: '学校',
            prop: 'collageName',
            width:200
        },
        {
            label: '专业',
            prop: 'majorName'
        },{
            label: "创建时间",
            prop: "createTime",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            // valueFormat: "yyyy-MM-dd hh:mm:ss",
            search: false
        }
    ],
};