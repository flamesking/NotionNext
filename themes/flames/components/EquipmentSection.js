// components/EquipmentSection.js
'use client';

import EquipmentItem from './EquipmentItem';

const equipmentData = [
  // 生产力设备
  {
    category: '生产力',
    description: '提升自己生产效率的硬件设备',
    items: [
      {
        name: 'MacBook Pro',
        specification: 'M1Pro 32G / 1TB',
        description:
          '屏幕显示效果好、色彩准确、对比度强、性能强劲、续航优秀。可以用来开发和设计。',
        imageUrl: 'https://p.zhheo.com/YnW8cc21590681686120255749.png!cover',
        articleLink: '/p/daebc472.html',
      },
      {
        name: 'iPhone 13 Pro',
        specification: '白色 / 256G',
        description: '第一代支持ProMotion的iPhone，A15性能优秀。',
        imageUrl: 'https://p.zhheo.com/TofzQM22190681686120261484.png!cover',
        detailLink: 'https://www.apple.com/by/iphone-13-pro/',
      },
      // 其他设备...
    ],
  },
  // 出行设备
  {
    category: '出行',
    description: '用来出行的实物及设备',
    items: [
      {
        name: '航宇之星双肩包',
        specification: '标准版',
        description:
          '造型炫酷，包的容量非常大，还有魔术贴位置，我贴上了鸡哥的头像。',
        imageUrl: 'https://p.zhheo.com/20jaBU21790681686121157367.png!cover',
        detailLink: 'https://detail.meizu.com/item/pasasjb.html',
      },
      {
        name: '魅族重塑斜挎包',
        specification: '标准版',
        description:
          '一款轻便小巧的斜挎包，虽然体积比较小，能放的东西少，但是非常好看。',
        imageUrl: 'https://p.zhheo.com/wCvvZ823590681686121235468.png!cover',
        detailLink: 'https://detail.meizu.com/item/pandaerxkb.html',
      },
      // 其他设备...
    ],
  },
  // 家庭娱乐设备
  {
    category: '家庭娱乐',
    description: '用来娱乐的硬件设备',
    items: [
      {
        name: 'Windows台式机',
        specification: 'i5 12600KF / 1060 3G',
        description: '用来玩英雄联盟',
        imageUrl: 'https://p.zhheo.com/CMEL6523190781719974191031.png!cover',
        articleLink: '/p/9a18f6bb.html',
      },
      {
        name: '泰坦军团显示器',
        specification: 'P2710R',
        description: '很便宜的2k27寸180hz显示器',
        imageUrl: 'https://p.zhheo.com/kNuHgp25491181731556254338.webp!cover',
        articleLink: '/p/3a1aeeb3.html',
      },
      // 其他设备...
    ],
  },
  // 健康生活设备
  {
    category: '健康生活',
    description: '日常用的一些小的数码好物',
    items: [
      {
        name: '米家桌面移动风扇',
        specification: '标准版',
        description: '可以摇头的小风扇，噪音不高，摇头避免吹得头疼',
        imageUrl: 'https://p.zhheo.com/wOl8SB23490481714276594049.png!cover',
        articleLink: '/p/528d7b31.html',
      },
      // 其他设备...
    ],
  },
];

const EquipmentSection = () => {
  return (
    <div id="equipment">
      {equipmentData.map((category, index) => (
        <div key={index} className="equipment-item">
          {/* 类别标题和描述 */}
          <h2 className="equipment-item-title">{category.category}</h2>
          <div className="equipment-item-description">
            {category.description}
          </div>

          {/* 设备列表 */}
          <div className="equipment-item-content">
            {category.items.map((item, idx) => (
              <EquipmentItem key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentSection;