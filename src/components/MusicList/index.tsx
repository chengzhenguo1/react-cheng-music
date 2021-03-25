import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'
import { Table } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import { Track } from '../../api/types/songlist'
import './index.less'

interface IProps {
    data?: Track[]
}

const MusicList: React.FC<IProps> = memo(({ data }) => {
 const musicUrl = 'https://music.163.com/song/media/outer/url?id='
 const columns: ColumnsType<Track> = [
    {
      dataIndex: 'index',
      title: '',
      key: 'index',
      width: 40,
      align: 'center',
      render: (value, record, index: number) => (
          <span className='table-index'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
      ),
    },
    {
      title: '音乐标题',
      key: 'name',
      width: '45%',
      ellipsis: true,
      render: (value, record, index: number) => (
          <div className='music-title'>
              <a href={`${musicUrl}${record.id}.mp3`} download>
                  <DownloadOutlined className='download-icon' onClick={(e) => console.log(record)} />
              </a>
              <span className='music-name' title={record?.name}>{record?.name}</span>
          </div>
      ),
    },
    {
      title: '歌手',
      key: 'ar',
      dataIndex: ['ar', 'name'],
      width: '15%',
      ellipsis: true,
      render: (value, { ar }, index: number) => (
        ar.map((item) => <Link to='/' key={item.name} className='text-gray'>{item.name}</Link>)
        ),
    },
    {
      title: '专辑',
      key: 'al',
      dataIndex: ['al', 'name'],
      width: '20%',
      ellipsis: true,
      render: (value, { al }, index: number) => <Link to='/' className='text-gray'>{al.name}</Link>,
    },
    {
        title: '时长',
        key: 'dt',
        width: '10%',
        render: (value, { dt }, index: number) => <span className='text-gray'>{dayjs(dt).format('mm:ss')}</span>,
    },
  ];
   return (
       <Table<Track> rowKey='id' columns={columns} dataSource={data} pagination={false} className='music-table' />
)
 })

export default MusicList