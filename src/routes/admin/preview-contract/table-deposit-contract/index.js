import moment from "moment";
import { useAuth } from "global";
import { depositContract } from "services/contract";
import { useState } from "react";

export default function TableDepositContract() {
  const { formatDate } = useAuth();
  const [signcontract, setSignContract] = useState(false)

  return [(data) =>
    <div className="bg-white w-full p-4">

      <table width="100%" cellPadding="8">
        <tbody>
          <tr>
            <td align="center" colSpan="3">
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM <br />
              Độc lập - Tự do - Hạnh phúc <br />
              --------------------
            </td>
          </tr>
          <tr>
            <td align="center" colSpan="3">
              <strong>HỢP ĐỒNG CỌC TIỀN NHÀ</strong>
              <p>Mã Hợp Đồng: {data?.depositContractCode} </p>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              Hôm nay ngày {moment(data?.createdAt).format(formatDate)} tại {data?.address}. Chúng tôi gồm:
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table width="100%" cellPadding="5">
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <strong>BÊN A - CHỦ NHÀ - BÊN NHẬN CỌC</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>Họ và tên: {data?.lessor?.name} </td>
                    <td>Số điện thoại: {data?.lessor?.phoneNumber} </td>
                    <td>Email: {data?.lessor?.email}  </td>
                  </tr>
                  <tr>
                    <td>Sinh ngày: {moment(data?.lessor?.dateOfBirthday).format(formatDate)} </td>
                    <td>Tài khoản ngân hàng: {data?.lessor?.accountBank} </td>
                    <td>Tên ngân hàng: {data?.lessor?.bank} </td>
                  </tr>
                  <tr>
                    <td>CMND/CCCD/Passport: {data?.lessor?.identityCard} </td>
                    <td>Cấp ngày: {data?.lessor?.icPlace} </td>
                    <td>Nơi cấp: {moment(data?.lessor?.icDate).format(formatDate)}</td>

                  </tr>

                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table width="100%" cellPadding="5">
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <strong>BÊN B – NGƯỜI THUÊ – BÊN ĐẶT CỌC </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Họ và tên: {data?.depositor?.name}</td>
                    <td>Số điện thoại: {data?.depositor?.phoneNumber}</td>
                    <td>Email: {data?.depositor?.email}</td>
                  </tr>
                  <tr>
                    <td>Sinh ngày: {moment(data?.depositor?.dateOfBirthday).format(formatDate)}</td>
                    <td colSpan="2">Địa chỉ: {data?.depositor?.address}</td>
                  </tr>
                  <tr>
                    <td>CMND/CCCD/Passport: {data?.depositor?.identityCard}</td>
                    <td>Cấp ngày: {data?.depositor?.icPlace}</td>
                    <td>Nơi cấp: {moment(data?.depositor?.icDate).format(formatDate)} </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table width="100%" cellPadding="5">
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <strong>BÊN C – MÔI GIỚI – NGƯỜI LÀM CHỨNG </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Họ và tên: {data?.housingBroker?.name}</td>
                    <td>Số điện thoại: {data?.housingBroker?.identityCard}</td>
                    <td>Email: {data?.housingBroker?.email}</td>
                  </tr>
                  <tr>
                    <td>Sinh ngày: {moment(data?.housingBroker?.dateOfBirthday).format(formatDate)}</td>
                    <td colSpan="2">Địa chỉ: {data?.housingBroker?.address}</td>
                  </tr>
                  <tr>
                    <td>CMND/CCCD/Passport: {data?.housingBroker?.identityCard}</td>
                    <td>Cấp ngày: {data?.housingBroker?.icPlace}</td>
                    <td>Nơi cấp:  {moment(data?.housingBroker?.icDate).format(formatDate)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3"><strong>Sau khi thương lượng, bên A vs bên B đồng ý ký hợp đồng cọc thuê căn hộ như sau:</strong><br /></td>
          </tr>
          <tr>
            <td colSpan="3">
              <table width="100%" cellPadding="5">
                <tbody>
                  <tr>
                    <td colSpan="2"><strong>ĐIỀU 1: TÀI SẢN CHO THUÊ </strong><br /></td>
                  </tr>

                  <tr>
                    <td>Số căn hộ: {data?.roomDto?.roomNumber} </td>
                    <td>Diện tích: {data?.roomDto?.acreage}</td>
                  </tr>
                  <tr>
                    <td>Giá thuê: {data?.roomDto?.price} </td>
                    <td>Thời hạn thuê: từ ngày {moment(data?.fromDate).format(formatDate)} đến {moment(data?.endDate).format(formatDate)} </td>
                  </tr>
                  <tr>
                    <td>Trang bị nội thất: Xem phụ lục</td>
                    <td>Mục đích sử dụng: Thuê để ở/Kinh doanh với số người: {data?.roomDto?.tenant}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">Quy định tòa nhà: Xem phụ lục</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table cellPadding="3" width="100%">
                <tbody>
                  <tr>
                    <td><strong>ĐIỀU 2: CÁC LOẠI PHÍ</strong><br /></td>
                  </tr>
                  <tr><td><strong>2.1 </strong>{data?.costs?.map((ele) => ele.name)}: {data?.costs?.map((ele) => ele.unitPrice)} đồng/tháng</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table cellPadding="3" width="100%">
                <tbody>
                  <tr>
                    <td><strong>ĐIỀU 3 : QUYỀN VÀ NGHĨA VỤ CỦA BÊN THUÊ</strong><br /></td>
                  </tr>
                  <tr><td><strong>3.1 </strong>Bên B đã cọc cho Bên A số tiền là: {data?.depositNumber} đồng để thuê căn hộ tại Điều 1</td></tr>
                  <tr><td><strong>3.2 </strong>Bên A cam kết sẽ giữ căn hộ cho Bên B trong 7 ngày kể từ ngày Bên A ký</td></tr>
                  <tr><td><strong>3.3 </strong>Nếu bên A không tiến hành các thủ tục để hai bên ký hợp đồng thuê trong vòng 7 ngày kể từ ngày bên
                    A ký thì coi như bên A phải chịu mất cọc</td></tr>
                  <tr><td><strong>3.4 </strong>Nếu bên B thay đổi ý định và không thực hiện việc kí kết hợp đồng thuê với bên A đúng thời hạn
                    thì bên B phải chịu đền bù gấp đôi số tiền đặt cọc</td></tr>

                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table cellPadding="3" width="100%">
                <tbody>
                  <tr>
                    <td><strong>ĐIỀU 4: GHI CHÚ KHÁC</strong><br /></td>
                  </tr>
                  <tr><td><strong>- </strong>Khi trao trả lại phòng thuê cho Bên A, khách hàng đồng thời phải bàn giao lại các
                    thiết bị đang hoạt động tốt và hiện trạng phòng thuê được vệ sinh như lúc được
                    nhận không gian thuê ban đầu.</td></tr>
                  <tr><td><strong>- </strong>Mọi thay đổi, hư hỏng, mất mát, vệ sinh khách hàng phải chịu trách nhiệm sửa chữa,
                    khắc phục như hiện trạng để Bên A kiểm tra đồng ý xác nhận thì khách hàng mới
                    hoàn tất được việc giao trả không gian thuê và được nhận lại số tiền đã đặt cọc.</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table cellPadding="3" width="100%">
                <tbody>
                  <tr>
                    <td><strong>CAM KẾT CHUNG:</strong><br /></td>
                  </tr>
                  <tr><td>Hai bên nhất trí thỏa thuận và cam kết thi hành nghĩa vụ hợp đồng</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" colSpan="2">
            </td>
            <td align="center">
              <strong>..., ngày ...tháng ...năm ... </strong>
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>Bên A</strong> <br />
              {!signcontract &&
                <button className='ml-2 ant-btn ant-btn-default' onClick={() =>
                  setSignContract(async () => await depositContract.lessorSignContract(data?.id))}>Ký tên</button>
              }
              {signcontract &&
                <div>
                  <em>(Ký tên)</em> <br />
                  <p>Hợp đồng được ký bởi {data?.lessor?.name} ngày {moment(new Date().toLocaleString() + '').format(formatDate)}</p>
                </div>
              }
            </td>
            <td>
            </td>
            <td align="center">
              <strong>Bên B</strong> <br />
              <em>(Ký tên)</em> <br />
              {/* Hợp đồng được ký bởi Nguyễn Văn A ngày 13 tháng 03 năm 2022 */}
              {/* <p>Hợp đồng được ký bởi {data?.depositor?.name} ngày {moment(data?.signByTenantDate).format(formatDate)}</p> */}

            </td>
          </tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>
  ]
}
