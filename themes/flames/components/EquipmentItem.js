// components/EquipmentItem.js
'use client';

import Link from 'next/link';

const EquipmentItem = ({ item }) => {
  const {
    name,
    specification,
    description,
    imageUrl,
    articleLink,
    detailLink,
  } = item;

  return (
    <div className="equipment-item-content-item">
      {/* 设备封面图片 */}
      <div className="equipment-item-content-item-cover">
        <img
          className="equipment-item-content-item-image entered loaded"
          src={imageUrl}
          onError={(e) => (e.target.src = '/img/b_av.webp')}
          alt={name}
          data-ll-status="loaded"
        />
      </div>

      {/* 设备信息 */}
      <div className="equipment-item-content-item-info">
        {/* 设备名称 */}
        <div
          className="equipment-item-content-item-name"
          onClick={() => {
            rm.rightmenuCopyText(name);
            btf.snackbarShow('已复制装备名称');
          }}
        >
          {name}
        </div>

        {/* 设备规格 */}
        <div className="equipment-item-content-item-specification">
          {specification}
        </div>

        {/* 设备描述 */}
        <div className="equipment-item-content-item-description">
          {description}
        </div>

        {/* 工具栏 */}
        <div className="equipment-item-content-item-toolbar">
          {/* 查看文章链接 */}
          {articleLink && (
            <Link
              className="equipment-item-content-item-link"
              href={articleLink}
              target="_blank"
            >
              查看文章
            </Link>
          )}

          {/* 外部详情链接 */}
          {detailLink && (
            <a
              className="equipment-item-content-item-link"
              href={detailLink}
              rel="external nofollow"
              target="_blank"
            >
              详情
            </a>
          )}

          {/* 评论按钮 */}
          <a
            className="bber-reply"
            onClick={() =>
              rm.rightMenuCommentText(
                `${name} ${specification} ${description}`
              )
            }
            data-pjax-state=""
          >
            <i className="heoblogIcon icon-chat-1-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquipmentItem;