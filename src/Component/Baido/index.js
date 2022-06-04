import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'

const full = {
  background: 'red',
  color: '#fff',
  width: 200,
  padding: 10,
  fontSize: 24,
  fontWeight: 'bold',
  margin: 10,
}

const free = {
  background: 'white',
  width: 200,
  padding: 10,
  fontSize: 24,
  fontWeight: 'bold',
  border: '1px solid #eee',
  margin: 10,
}

const QuanLyBaiDo = () => {

  const dataBaiDo = [1, 2, 3, 4, 5, 6, 7]
  const [dataConTrong, setDataTrong] = useState([1, 2, 4, 5, 6, 7])
  const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true);
  //   const baseUrl = "http://192.168.2.106:5000/api/v1/vacant"
  //   axios.get(baseUrl)
  //   .then(res => {
  //     res
  //   })

  // }, [])

  return (
    <div style={{ width: '100%', paddingLeft: 50 }}>
      <div style={{ background: '#fff', padding: 10, fontWeight: 'bold', fontSize: 18 }}>QUẢN LÝ BÃI ĐỖ</div>
      <div style={{ background: '#fff', marginTop: 20 }}>
        <h2 style={{ padding: 10 }}>Sơ đồ bãi đỗ xe</h2>
        <h2 style={{ padding: 10 }}>Bãi A1</h2>
        <ul style={{ display: 'flex' }}>
          {
            dataBaiDo.map(b => {
              return (
                <li style={!dataConTrong.includes(b) ? full : free}>{b}</li>
              )
            }
            )
          }
        </ul>
      </div>
      <div style={{ background: '#fff', marginTop: 20, marginBottom: 20 }}>
        <h2 style={{ padding: 10 }}>Chú giải</h2>
        <ul style={{ display: 'flex' }}>

          <li style={full}>
            Đã có người đỗ
          </li>
          <li style={free}>
            Đang còn trống
          </li>
        </ul>
      </div>
    </div>
  )
}

export default QuanLyBaiDo