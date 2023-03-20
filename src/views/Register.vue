<template>
  <h1 class="flex justify-center">สมัครสมาชิก</h1>
  <form method="POST" class="form-control-custom">
    <label for="username">👤 ชื่อผู้ใช้</label>
    <input type="text" name="username" id="username" placeholder="ชื่อผู้ใช้ 3 ตัวขึ้นไป" />
    <label for="email">📧 อีเมลล์</label>
    <input type="email" name="email" id="email" placeholder="เช่น john@doe.com" />
    <label for="password">🔑 รหัสผ่าน</label>
    <input type="password" name="password" id="password" placeholder="รหัสผ่าน 8 ตัวขึ้นไป" />
    <button type="submit">✨ สมัครสมาชิก</button>
  </form>
</template>
