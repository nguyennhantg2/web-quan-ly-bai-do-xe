import React from 'react'
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'

const dataCamera = [
  {
    id: 1,
    tenCamera: "Camera 1",
    maKhuVuc: "Khu vuc 1",
    pathUrl: "https://www.w3schools.com/html/movie.mp4",
    mota: "ddsadsadsa",
  },
  {
    id: 2,
    tenCamera: "Camera 2",
    maKhuVuc: "Khu vuc 1",
    pathUrl: "",
    mota: "dayđasadsaamera"
  },
  {
    id: 3,
    tenCamera: "Camera 3",
    maKhuVuc: "Khu vuc 1",
    pathUrl: "",
    mota: "ddsadsaa"
  },
  {
    id: 4,
    tenCamera: "Camera 4",
    maKhuVuc: "Khu vuc 1",
    pathUrl: "https://www.w3schools.com/html/movie.mp4",
    mota: "dđasadsara"
  }
]

const QuanLyCamera = () => {
  return (
    <div style={{ width: '100%', paddingLeft: 50 }}>
      <div style={{background: '#fff', padding: 10, fontWeight: 'bold', fontSize: 18}}>Quản lý camera</div>
      <div>
        <Row>
          {
            dataCamera.map(c => {
              const { id, tenCamera, maKhuVuc, pathUrl, mota } = c
              return (
                <Col span={8}>
                  <div style={{ padding: 20 }}>
                    {
                      pathUrl ?
                        <video src={pathUrl} style={{width: '100%', height: 260}} controls>
                        </video>
                        : <img style={{ width: '100%', height: '100%' }} src="https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg" />
                    }

                    <div>
                      <span style={{fontWeight: 'bold'}}>
                        {tenCamera}
                      </span>
                      <br />
                      <span>
                        {mota}
                      </span>
                    </div>
                  </div>
                </Col>
              )
            })
          }

          {/* <Col span={8}>
                        cameera 1
                    </Col>
                    <Col span={8}>

                    </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default QuanLyCamera