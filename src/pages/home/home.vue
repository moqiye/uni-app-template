<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 18:24:50
 * @LastEditTime: 2023-06-08 20:16:05
-->
<script setup lang="ts">
  const goBack = () => {
    uni.navigateTo({
      url: '/pages/login/login',
    });
  };
</script>
<template>
  <uni-countdown
    :font-size="30"
    :day="1"
    :hour="2"
    :minute="30"
    :second="0"
    background-color="#007AFF"
  />

  <uni-section title="双标题卡片" type="line">
    <uni-card title="基础卡片" sub-title="副标题" extra="额外信息">
      <text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
  </uni-section>
  <uni-section
    title="文字滚动"
    subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示"
    type="line"
  >
    <uni-notice-bar
      show-icon
      scrollable
      text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    />
  </uni-section>
  <uni-section
    title="自定义背景"
    type="line"
    subTitle="使用 background 属性设置自定义背景色"
    padding
  >
    <uni-number-box :value="50" background="#2979FF" color="#fff" />
  </uni-section>
  <button @click="goBack">返回</button>
</template>
<style scoped></style>
