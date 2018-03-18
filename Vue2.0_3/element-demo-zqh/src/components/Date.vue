<template>
	<div id="date">
		<el-date-picker
	      v-model="value1"
	      type="datetime"
	      placeholder="选择日期"
	      :picker-options="ranger">
	    </el-date-picker>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				value1:'',
				ranger:{
					disabledDate(time) {
			           return time.getTime() < Date.now() - 8.64e7;
			        },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
				}
			}
		}
	}
</script>
