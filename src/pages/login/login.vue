<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-12 16:03:34
 * @LastEditTime: 2023-07-12 16:22:39
-->
<script setup lang="ts">
  const formData = ref<any>({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    uni.switchTab({
      url: '/pages/home/home',
    });
  };
</script>
<template>
  <!-- <view class="uni-padding-wrap uni-common-mt">
    <button type="primary">页面主操作 Normal</button>
    <button type="primary" loading="true">页面主操作 Loading</button>
    <button type="primary" disabled="true">页面主操作 Disabled</button>
    <button type="default">页面次要操作 Normal</button>
    <button type="default" disabled="true">页面次要操作 Disabled</button>
    <button type="warn">警告类操作 Normal</button>
    <button type="warn" disabled="true">警告类操作 Disabled</button>
    <view class="button-sp-area">
      <button type="primary" plain="true">按钮</button>
      <button type="primary" disabled="true" plain="true">不可点击的按钮</button>
      <button type="default" plain="true">按钮</button>
      <button type="default" disabled="true" plain="true">按钮</button>
      <button class="mini-btn" type="primary" size="mini">按钮</button>
      <button class="mini-btn" type="default" size="mini">按钮</button>
      <button class="mini-btn" type="warn" size="mini">按钮</button>
    </view>
  </view> -->
  <view class="content">
    <uni-forms :modelValue="formData">
      <uni-forms-item label="用户名" name="username">
        <uni-easyinput type="text" v-model="formData.username" placeholder="请输入用户名" />
      </uni-forms-item>
      <uni-forms-item required name="password" label="密码">
        <uni-easyinput type="text" v-model="formData.password" placeholder="请输入用户名" />
      </uni-forms-item>
    </uni-forms>
    <button class="btn-success" @click="handleLogin">登录</button>

    <text class="title">title1</text>
    <text class="title">title2</text>
    <text class="title">title3</text>
    <text class="title">title4</text>
  </view>
</template>
<style lang="scss" scoped>
  .btn-success {
    background-color: $uni-color-primary;
  }

  .content {
    .title:nth-child(even) {
      color: red !important;
    }
  }
</style>
