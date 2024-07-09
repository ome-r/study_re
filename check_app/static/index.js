$(document).ready(function() {
	$("#attend_check").submit(function(event) {
		event.preventDefault(); // 폼의 기본 제출 동작 방지

		console.log("check attend start")
		var pattern_name = /^[가-힣]+$/
		var pattern_number = /^[0-9]+$/

		var is_id = $.trim($("#id").val()).match(pattern_number) ? false : true
			// is_name = $.trim($("#name").val()).match(pattern_name) ? false : true
	// is_seat = $.trim($("#seat").val()).match(pattern_number) ? false : true

	// if (is_name) {
	// 	alert("이름을 정확히 입력해주세요")
	// 	return false
	// } else if (is_id) {
	// 	alert("학번을 정확히 입력해주세요")
	// 	return false
	// } else if (is_seat) {
	// 	alert("좌석을 제대로 입력해주세요")
	// 	return false
	// }


		if (is_id) {
			alert("학번을 정확히 입력해주세요")
			return false
		}

		// 폼 데이터를 가져오기
		var formData = $(this).serialize();

		// AJAX를 사용하여 폼 데이터 제출
		$.ajax({
			type: "POST",
			url: $(this).attr("action"),
			data: formData,
			success: function(response) {
				// 서버 응답 처리 (예: 결과 메시지 표시)
				$("body").html(response);

				// 입력 필드 초기화
				$("#name").val('');
				$("#id").val('');
			},
			error: function(error) {
				console.log("Error: ", error);
			}
		});
	});
});

