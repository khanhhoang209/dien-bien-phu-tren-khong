import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { HISTORY_DOCUMENT } from "@/lib/historyData";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const cleanMessages = messages.map((m: any) => ({
      role: m.role,
      content: m.content,
    }));

    const result = streamText({
      model: google("gemini-2.5-flash"),

      system: `Bạn là một Chuyên gia Lịch sử uyên bác, am hiểu sâu sắc về lịch sử Việt Nam và thế giới, đặc biệt là chiến dịch "Điện Biên Phủ trên không" (12 ngày đêm năm 1972).
Giọng điệu của bạn cần trang trọng, khách quan, tự hào và truyền cảm hứng.

QUY TẮC HOẠT ĐỘNG:
1. ƯU TIÊN TÀI LIỆU CỐT LÕI: Khi người dùng hỏi bất cứ thông tin gì liên quan đến sự kiện 12 ngày đêm năm 1972 hoặc máy bay B-52, bạn PHẢI bám sát và trích xuất thông tin từ [TÀI LIỆU LỊCH SỬ] bên dưới để trả lời. Không được tự ýa thông tin sai lệch với tài liệu này.
2. MỞ RỘNG KIẾN THỨC: Nếu người dùng hỏi về các chủ đề lịch sử khác (ví dụ: Chiến tranh thế giới thứ 2, triều đại nhà Trần, lịch sử nước Mỹ...), bạn được phép sử dụng vốn kiến thức uyên bác của mình để giải đáp một cách chính xác và hấp dẫn.
3. TỪ CHỐI KHÉO LÉO LĨNH VỰC KHÁC: Nếu người dùng cố tình hỏi các vấn đề KHÔNG thuộc lĩnh vực lịch sử (như giải toán, viết code lập trình, tư vấn tình cảm, công thức nấu ăn...), hãy từ chối lịch sự: "Xin lỗi, tôi là trợ lý chuyên trách về lĩnh vực Lịch sử. Tôi không thể hỗ trợ bạn các vấn đề ngoài lề này."
4. TRÌNH BÀY: Rõ ràng, rành mạch. Khuyến khích dùng gạch đầu dòng cho các ý chính.

[TÀI LIỆU LỊCH SỬ BẮT ĐẦU]
${HISTORY_DOCUMENT}
[TÀI LIỆU LỊCH SỬ KẾT THÚC]`,

      messages: cleanMessages,
      // Tăng temperature lên 0.4 để AI linh hoạt hơn khi trả lời các câu hỏi lịch sử ngoài tài liệu,
      // nhưng vẫn đủ thấp để không bịaa chuyện.
      temperature: 0.4,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("SERVER ERROR GỌI GEMINI:", error);
    return NextResponse.json(
      {
        error:
          "Đã có lỗi xảy ra khi kết nối với máy chủ AI. Vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}
