<template>
  <h1>บันทึกรายการอาหาร</h1>
  <div class="flex flex-col lg:flex-row items-center mt-4 gap-4">

    <div class="flex max-w-md shadow-lg">
      <img class="w-28 h-28 object-cover" src="https://www.kinraideewa.com/wp-content/uploads/2021/09/Italian-food.jpg" alt="" />
      <div class="flex flex-col flex-1 w-full px-4 py-2">
        <h2 class="my-1.5">มินิพิซซ่า ไมโครเวฟ</h2>
        <div class="flex gap-2 w-full">
          <button class="rounded flex-1 shadow p-2 bg-cyan-400 hover:bg-cyan-500 hover:text-white">ดูเพิ่มเติม</button>
          <button class="rounded shadow p-2 text-red-400 hover:bg-red-400 hover:text-white ring-red-400">ลบออก</button>
        </div>
      </div>
    </div>


    <div class="flex max-w-md shadow-lg">
          <img class="w-28 h-28 object-cover" src="https://img.wongnai.com/p/1920x0/2017/06/15/e127e044133643ab84e7fc7600c53739.jpg" alt="" />
          <div class="flex flex-col w-full px-4 py-2">
            <h2 class="my-1.5">ข้าวผัดปู</h2>
            <div class="flex gap-2">
              <button class="rounded flex-1 shadow p-2 bg-cyan-400 hover:bg-cyan-500 hover:text-white">ดูเพิ่มเติม</button>
              <button class="rounded shadow p-2 text-red-400 hover:bg-red-400 hover:text-white ring-red-400">ลบออก</button>
            </div>
          </div>
        </div>


    <div class="flex max-w-md shadow-lg">
          <img class="w-28 h-28 object-cover" src="https://pbs.twimg.com/media/ErSdy4mVEAIS7im?format=jpg&name=medium" alt="" />
          <div class="flex flex-col w-full px-4 py-2">
            <h2 class="my-1.5">หมูสับต้มแซ่บ</h2>
            <div class="flex gap-2">
              <button class="rounded flex-1 shadow p-2 bg-cyan-400 hover:bg-cyan-500 hover:text-white">ดูเพิ่มเติม</button>
              <button class="rounded shadow p-2 text-red-400 hover:bg-red-400 hover:text-white ring-red-400">ลบออก</button>
            </div>
          </div>
        </div>
  </div>
</template>
