<template>
  <form method="POST" class="form-control-custom">
    <label for="username">ชื่อผู้ใช้</label>
    <input type="text" name="username" id="username" placeholder="ชื่อผู้ใช้ 3 ตัวขึ้นไป" />
    <label for="email">อีเมลล์</label>
    <input type="email" name="email" id="email" placeholder="เช่น john@doe.com" />
    <label for="password">รหัสผ่าน</label>
    <input type="password" name="password" id="password" placeholder="รหัสผ่าน 8 ตัวขึ้นไป" />
    <button type="submit">สมัครสมาชิก</button>
  </form>
</template>

<style scoped>
input {
    @apply max-w-sm border p-2 ml-3;
}

input:focus {
    @apply ring-2 ring-amber-300 outline-none;
}
</style>