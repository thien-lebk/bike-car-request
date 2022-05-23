import moment from "moment";
import { rentedContract } from "services/contract";
import { useAuth } from "global";
import { useState } from "react";

export default function TableRentedContract() {
  const { formatDate } = useAuth();
  const [signcontract, setSignContract] = useState(false)

  return [(data) =>
    <div className="bg-white w-full p-4">
      <table>
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
              <strong>HỢP ĐỒNG THUÊ NHÀ</strong>
              <p>Mã Hợp Đồng: {data?.code}</p>
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
                      <strong>BÊN CHO THUÊ </strong>(Gọi tắt là bên A)<br />
                    </td>
                  </tr>
                  <tr>
                    <td>Họ và tên: {data?.lessor?.name} </td>
                    <td>Số điện thoại: {data?.lessor?.phoneNumber} </td>
                    <td>Email: {data?.lessor?.email}</td>
                  </tr>
                  <tr>
                    <td>CMND/CCCD/Passport: {data?.lessor?.indentityCard}</td>
                    <td>Cấp ngày: {moment(data?.lessor?.icDate).format(formatDate)} </td>
                    <td>Nơi cấp: {data?.lessor?.icPlace}</td>
                  </tr>
                  <tr><td colSpan="3">Hiện là quản lý tòa nhà: {data?.buildingName}</td></tr>
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
                      <strong>BÊN THUÊ </strong>(Gọi tắt là bên B)<br />
                    </td>
                  </tr>
                  <tr>
                    <td>Họ và tên: {data?.tenant?.name}</td>
                    <td>Số điện thoại: {data?.tenant?.phoneNumber}</td>
                    <td>Email: {data?.tenant?.email}</td>
                  </tr>
                  <tr>
                    <td>CMND/CCCD/Passport: {data?.tenant?.indentityCard}</td>
                    <td>Cấp ngày: {moment(data?.tenant?.icDate).format(formatDate)}</td>
                    <td>Nơi cấp: {data?.tenant?.icPlace}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3"><strong>Hai bên cùng nhau kí hợp đồng thuê nhà với các điều kiện đi kèm như sau:</strong><br /></td>
          </tr>
          <tr>
            <td colSpan="3">
              <table width="100%" cellPadding="5">
                <tbody>
                  <tr>
                    <td colSpan="2"><strong>ĐIỀU 1: TÀI SẢN CHO THUÊ </strong><br /></td>
                  </tr>

                  <tr>
                    <td>Số căn hộ: {data?.roomNumber} </td>
                    <td>Diện tích: {data?.acreage}</td>
                  </tr>
                  <tr>
                    <td>Giá thuê: {data?.price}</td>
                    <td>Thời hạn thuê: kể từ ngày {moment(data?.fromDate).format(formatDate)} đến {moment(data?.toDate).format(formatDate)}</td>
                  </tr>
                  <tr>
                    <td>Chỉ số điện: {data?.electricityIndicator} </td>
                    <td>Chỉ số nước: {data?.waterIndicator}</td>
                  </tr>
                  <tr>
                    <td>Mục đích sử dụng: Thuê để ở/Kinh doanh với số người: {data?.numberOfTenants} </td>
                    <td>Số tiền đặt cọc: {data?.deposit}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">Giá thuê trên không bao gồm chi phí sử dụng điện, nước, điện thoại, internet, truyền hình cáp, và các chi
                      phí dịch vụ khác (sau đây gọi là Phí sinh hoạt); phần này bên B phải chi trả.<br /></td>
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
                    <td><strong>ĐIỀU 2 : QUYỀN VÀ NGHĨA VỤ CỦA BÊN CHO THUÊ</strong><br /></td>
                  </tr>
                  <tr><td><strong>- </strong>Nhận đủ tiền thuê nhà theo đúng thời hạn và phương thức đã thỏa thuận</td></tr>
                  <tr><td><strong>- </strong>Nhận lại toàn bộ căn nhà đã cho thuê khi hợp đồng thuê kết thúc</td></tr>
                  <tr><td><strong>- </strong>Đơn phương đình chỉ việc thực hiện hợp đồng thuê và yêu cầu bồi thường thiệt hại nếu
                    bên B không thanh toán tiền thuê đầy đủ theo thỏa thuận, và không chấp hành quy định
                    đã nêu trong hợp đồng này.</td></tr>
                  <tr><td><strong>- </strong>Giao phòng và đảm bảo thời gian thuê như đúng hợp đồng cam kết.</td></tr>
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
                  <tr><td><strong>- </strong>Trả tiền thuê nhà, chi phí điện, nước,rác đúng hạn theo phương thức đã thỏa thuận
                    Cụ thể : Trả tiền thuê đúng thời hạn từ ngày 1 đến ngày 3 hàng tháng. Kể từ ngày 4
                    hàng tháng trở đi sẽ bị phạt 100,000vnđ/ngày nhưng không được quá 05 ngày. Kể từ
                    ngày 9 bên A có quyền đơn phương chấm dứt hợp đồng thuê phòng và không hoàn trả
                    toàn bộ tiền đặt cọc.</td></tr>
                  <tr><td><strong>- </strong>Trong thời hạn gần hết hợp đồng (30 ngày), nếu Bên B thuê tiếp hoặc không thuê nữa
                    thì phải báo cho Bên A trước 30 ngày để gia hạn hợp đồng tiếp hoặc không. Nếu khách
                    hàng không báo trước về việc sẽ trả căn hộ trong 30 ngày hoặc trả phòng trước thời
                    hạn thuê theo hợp đồng thì Bên B sẽ mất tiền cọc và Bên B phải thanh toán chi phí
                    điện, nước, wifi, xe… và tiền nhà đã ở cho đến ngày bên B chuyển đi.</td></tr>
                  <tr><td><strong>- </strong>Trường hợp ở thêm người phải được sự đồng ý của bên A. Chi phí thêm một người ở:
                    500.000đồng/người nếu không thông báo cho bên A.</td></tr>
                  <tr><td><strong>- </strong>Khi cần sửa chữa cải tạo Phòng phải được sự đồng ý trước bằng văn bản của Bên A .</td></tr>
                  <tr><td><strong>- </strong>Thực hiện về các quy định về phòng cháy, chữa cháy</td></tr>
                  <tr><td><strong>- </strong>Bên B phải đảm bảo vệ sinh chung không gây ảnh hưởng tới bà con láng giềng và môi
                    trường khu vực. Nếu Bên B gây ra những hư hỏng, mất mát ở khu vực công trình chung
                    thì Bên B phải chịu trách nhiệm sửa chữa, bồi hoàn.</td></tr>
                  <tr><td><strong>- </strong>Bên B nhận Phòng do Bên A giao (cùng các trang thiết bị nội thất đi kèm). Khi Thỏa
                    thuận thuê kết thúc, những trang thiết bị nội thất khi trả nhà phải đầy đủ như biên bản
                    đính kèm. Những trang thiết bị nội thất trong Phòng mà Bên A đã cung cấp, nếu như
                    Bên B không cẩn thận làm mất hoặc dùng không đúng cách làm hư hỏng, mất mát (chấp
                    nhận hao mòn thông thường) phải có trách nhiệm sửa chữa, đền bù giống với tình trạng
                    sử dụng như đã bàn giao.</td></tr>
                  <tr><td><strong>- </strong>Gìn giữ Phòng luôn sạch (tường và các vật dụng nội thất bên trong Phòng), đẹp, sửa
                    chửa kịp các trang thiết bị, máy móc bị hư hỏng trong quá trình sử dụng. Bên B phải bồi
                    thường các chi phí cho việc sơn tường và sửa chữa các thiết bị do Bên B làm dơ hoặc hư
                    hỏng. Có trách nhiệm vệ sinh, bơm gas máy lạnh và vệ sinh nhà 6 tháng 1 lần khi kết
                    thúc thỏa thuận. Không được tự ý khoan, đục, đóng đinh mà không được sự cho phép
                    của bên A.</td></tr>
                  <tr><td><strong>- </strong>Phải tự sửa chữa các hư hỏng nhỏ như cầu chì, vòi nước bị rò rỉ, lỗ thoát nước bị nghẹt,
                    bóng đèn cháy....</td></tr>
                  <tr><td><strong>- </strong>Phải tự bảo quản các tài sản cá nhân, tư trang có giá trị của bên B.</td></tr>
                  <tr><td><strong>- </strong>Bên B phải tuân theo pháp luật Việt Nam. Không tang trữ chất ma túy, chất gây nghiện,
                    vũ khí ,vật liệu gây cháy nổ, cờ bạc, gái mại dâm v.v mà pháp luật Việt Nam cấm.</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table cellPadding="3" width="100%">
                <tbody>
                  <tr>
                    <td><strong>ĐIỀU 4 : QUY ĐỊNH VỀ BẢO TRÌ – SỬA CHỮA:</strong>
                      <br />
                    </td>
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
              <strong>..., ngày ... tháng ... năm ... </strong>
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>Bên A</strong> <br />
              {!signcontract &&
                <button className='ml-2 ant-btn ant-btn-default' onClick={() =>
                  setSignContract(async () => await rentedContract.lessorSignContract(data?.code))} >Ký tên</button>
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
