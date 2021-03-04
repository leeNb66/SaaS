<template>
    <div>
        <table>
            <tr>
                <th>基本信息</th>
                <td>课程名称：{{listss.name}}</td>
                <td>主讲老师：{{listss.teacher}}</td>
                <td>教室：{{listss.classes}}</td>
            </tr>
            <tr>
                <th>上课时间</th>
                <td>20213月1日 </td>
                <td>{{listss.time}}</td>
            </tr>
            <tr>
                <th>学员
                    <span class="iconfont icon-tianjiarenyuan"><a href="">添加学员</a></span>
                </th>
                <td><div>李俊鲸</div></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    props:{
        listss:{
            type:Object,
        }
    },
    created(){
        console.log(this.listss)
    }
};
</script>

<style  scoped>
    table{
        width: 100%;
        background-color: #fbfbff;
    }
    tr{
        width: 100%;
        height: 130px;
        float: left;
        margin:20px 0px 20px 0px;
        background-color: #ffffff;
    }
    tr th{
        font-weight:bold;
        height: 20px;
        width: 100%;
        float: left;
        margin-top: 28px;
        text-align: left;
        font-size: 17px;

    }
    tr td{
        margin: 28px 30px 0px 0px;
        float: left;
        font-size: 17px;
    }
    tr:nth-of-type(3) th span{
        margin-left: 15px;
    }
    tr:nth-of-type(3) th span a{
        padding-left: 5px;
        text-decoration:none;
        color: #4281fc;
        font-weight: normal;
    }
    tr:nth-of-type(3) td{
        height: 50px;
        background: url("../../assets/img/ico.png");
        background-position: 0px -635px;
    }
    tr:nth-of-type(3) td div{
        margin-left: 33px;
    }
    @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_2397874_f8g10mwklol.eot?t=1614758616054'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2397874_f8g10mwklol.eot?t=1614758616054#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABrgAAAK9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBPIFQATYCJAMICwYABCAFhG0HOBv+BVGUrMkO2Y/D2D1SYi3a4ITDp+0RE/PHJoKn/dJ5+/cwBCoFAAksAUnWhWWJhCO0VXFRlYCadWtv+/00JRY258uyqh2wQv8g7wPnp3R+Tk+p+bFws5u8dpsW7XymAw2y5sc9vkZxikWS/cXhtHneBTK/wbnMNTDqAoy3BjrWoMgKJPSG6VXDpYQBPE6gbqKxyoaLu0doy/C4QFwMPAXtnFeWw0RVKNcszeKWkmq6nN7hpvp+/LU0qiSlAi7ZevrcwvrHfJJSjDRGHBQIPgJaXUKB+UAmdtZGN6uJEF9Tj9ZNBfsqDH7MbzSEXuxVI8K/Duc3gz7IvSce499qfgIZ9q4ADo66npzq62qO/joY7bOWqd9rY4ea3H86DiCarg5V0+XHZ/f7a+fIven9t7Pp/bSHio8W2dr84d5VucXKNyN5ojOmTmu7k7btU5e238kxTm+f1nHnLi0Z/5rMg9IUhCWuh/2bNg6PF8vHinghivX/f5v7U1nxIweT6Q8VGqgOBmQ7nA61IjlgDUBjJCuG/+pvLGr9Hx8ZrfhXbcrg+ynzrvj97KB6blvwD3k9a3IswIp0NVxkS1Zk3BKwoI4G7Oz0O1bZc8PmUM3xQkgqJkChajoyY+dDSZPlUFa1GurmuVzdpAuriVzDXC8AQrtXSFqNQaHdGzJjf6Ck1x+UtUcBdbuja8smM+Ncdz2TErKojxiYLHXUIF1deE/eNlacFSjCM3EZBHCxcHExcUkp8Rwzyp23FHHoOEvwApxGcZxhzllIRqa+SL6aLTpd96apyRLoWo8RRRALaUcoYGRSTjQW3dLn7xHPVkzhlqoR8zPCSkH/aGFq3gN5KU17Vd3LK6Udz5IQDnJYJoEuwCASi2VQXj8oRAwx5Y8I51ZmpJ7rK52uL0++bhPUYVUKUlJovRSoNGSVTOlxq1IAAAAA') format('woff2'),
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.woff?t=1614758616054') format('woff'),
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.ttf?t=1614758616054') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.svg?t=1614758616054#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-tianjiarenyuan:before {
        content: "\e62c";
        color: #4281fc;
    }



</style>