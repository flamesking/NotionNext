'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { Sun, Moon, Palette, MessageSquare, Clock, ArrowRight } from "lucide-react";

interface CommentProps {
  id: string;
  avatar: string;
  username: string;
  date: string;
  content: string;
}

const RecentComment = ({ avatar, username, date, content }: CommentProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4 p-4 bg-white rounded-md border comment-card cursor-pointer hover:border-indigo-600">
      <div className="flex items-center space-x-2">
        <Avatar className="w-8 h-8">
          <img src={avatar} alt={username} />
        </Avatar>
        <div className="font-medium">{username}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="text-sm text-gray-700 line-clamp-2">{content}</div>
      <div className="flex items-center text-xs text-gray-400 mt-1">
        <span className="flex items-center hover:text-gray-600">
          <span className="mr-1">查看详情</span>
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
};

interface TagProps {
  id: string;
  name: string;
  count: number;
}

const TagBadge = ({ name, count }: TagProps) => {
  return (
    <Badge variant="outline" className="bg-white flex items-center justify-between px-3 py-1.5 cursor-pointer group hover:bg-indigo-600 tag-badge">
      <span className="group-hover:text-gray-50">{name}</span>
      <span className="text-xs text-gray-500 group-hover:text-gray-300 ml-1">{count}</span>
    </Badge>
  );
};

interface YearStatsProps {
  year: string;
  count: number;
}

const YearStats = ({ year, count }: YearStatsProps) => {
  return (
    <div className="bg-white p-4 rounded-md border year-stats-card cursor-pointer group hover:bg-indigo-600">
      <div className="text-gray-700 group-hover:text-gray-50 mb-1">{year}</div>
      <div className="text-xl font-bold group-hover:text-gray-50">{count} <span className="text-xs font-normal text-gray-500 group-hover:text-gray-300">篇</span></div>
    </div>
  );
};

export default function ControlPanel() {
  const [open, setOpen] = useState(false);

  // Add animation states
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const recentComments = [
    {
      id: 'comment-1',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=123',
      username: '897442922',
      date: '4/24',
      content: '同问'
    },
    {
      id: 'comment-2',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=456',
      username: 'Kevin',
      date: '4/24',
      content: '洪哥! 咱从haxo还到halo了，俩两年在考研木时间搞博...'
    },
    {
      id: 'comment-3',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=789',
      username: '1852759172',
      date: '4/22',
      content: '博主现在的博客用的是什么框架啊'
    },
    {
      id: 'comment-3',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=789',
      username: '1852759172',
      date: '4/22',
      content: '博主现在的博客用的是什么框架啊'
    },
    {
      id: 'comment-4',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=012',
      username: 'qyjok',
      date: '4/22',
      content: '我用Xiaomi Miot Auto 单独吧空调添加进HA，是不是双重控制...'
    }
  ];

  const tags = [
    { id: 'tag-1', name: '教程', count: 376 },
    { id: 'tag-2', name: '设计', count: 365 },
    { id: 'tag-3', name: '开发', count: 232 },
    { id: 'tag-4', name: '干货', count: 172 },
    { id: 'tag-5', name: 'Swift', count: 126 },
    { id: 'tag-6', name: '软件', count: 106 },
    { id: 'tag-7', name: '日常', count: 102 },
    { id: 'tag-8', name: 'Mac', count: 84 },
    { id: 'tag-9', name: 'Sketch', count: 80 },
    { id: 'tag-10', name: '热门', count: 71 },
    { id: 'tag-11', name: '必看', count: 70 },
    { id: 'tag-12', name: '网站构建', count: 51 },
    { id: 'tag-13', name: 'Hexo', count: 34 },
    { id: 'tag-14', name: 'SwiftUI-100days', count: 33 },
    { id: 'tag-15', name: 'AIGC', count: 31 },
    { id: 'tag-16', name: 'iOS', count: 31 },
    { id: 'tag-17', name: '评测', count: 27 },
    { id: 'tag-18', name: 'Photoshop', count: 27 },
    { id: 'tag-19', name: '构建', count: 26 },
    { id: 'tag-20', name: '视频', count: 23 },
    { id: 'tag-21', name: 'Heocan', count: 21 },
    { id: 'tag-22', name: '字体', count: 20 },
    { id: 'tag-23', name: 'AI绘画', count: 19 },
    { id: 'tag-24', name: '远程', count: 18 },
  ];

  const yearStats = [
    { year: '2025', count: 30 },
    { year: '2024', count: 125 },
    { year: '2023', count: 110 },
    { year: '2022', count: 122 },
    { year: '2021', count: 147 },
    { year: '2020', count: 319 },
    { year: '2019', count: 62 },
    { year: '全部文章', count: 944 }
  ];

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      console.log("onOpenChange triggered:", newOpen); // 调试日志
      setOpen(newOpen);
    }}>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full w-6 h-6 shadow-md">
          <Palette className="h-6 w-6" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>控制面板</DialogTitle>
          <DialogDescription>
            这是一个控制面板，包含最近评论、标签和年份统计信息。
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/70 p-2 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
          {/* <span className="text-xl">×</span> */}
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左侧 - 互动区域 */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-sm text-gray-500 mr-2">互动</h2>
              <div className="flex-grow h-px bg-gray-100"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              最近评论
              <ArrowRight className="ml-2 h-4 w-4 text-gray-400" />
            </h3>

            <div className="space-y-2">
              {recentComments.map((comment) => (
                <RecentComment
                  key={comment.id}
                  {...comment}
                />
              ))}
            </div>
          </div>

          {/* 右侧 - 标签区域 */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-sm text-gray-500 mr-2">标签</h2>
              <div className="flex-grow h-px bg-gray-100"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">寻找感兴趣的领域</h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <TagBadge
                  key={tag.id}
                  {...tag}
                />
              ))}
            </div>

            {/* 年份统计 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {yearStats.map((stat) => (
                <YearStats
                  key={stat.year}
                  year={stat.year}
                  count={stat.count}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 control-panel-button border-gray-200">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 control-panel-button border-gray-200">
            <Clock className="h-5 w-5" />
          </Button>
          <Button variant="default" size="icon" className="rounded-full w-12 h-12 bg-orange-500 hover:bg-orange-600 control-panel-button">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 control-panel-button border-gray-200">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
