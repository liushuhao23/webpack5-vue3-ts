<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-29 09:45:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-05 14:10:11
-->
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-29 09:45:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-05 12:07:44
-->
<template>
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :before-upload="beforeAvatarUpload"
      action=""
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script lang='ts'>
type Data = {
  chunk: null | File,
  hash: string,
}
export default {
  setup() {
    const SIZE = 10 * 1024 * 1024;
    let data: Data = {
      chunk: null,
      hash: '',
    };

    let createFileChunk = (file: any, size = SIZE): any => {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    };
    const beforeAvatarUpload = (file: any): boolean => {
      const result =  createFileChunk(file, SIZE);
      data =  result.map((item: any, index: number ) => ({
        chunk: file,
        hash: file.name + "-" + index
      }))
      console.log(data, '333');
      return false;
    };
    return {
      beforeAvatarUpload,
      createFileChunk,
    };
  },
};
</script>

<style scoped lang='less'>
</style>
