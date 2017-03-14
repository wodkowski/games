<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>XO-GAME</title>
<link href="<c:url value="/resources/css/bootstrap.min.css" />"
	rel="stylesheet">
<script src="<c:url value="/resources/jquery-3.1.1.min.js" />"></script>
<script src="<c:url value="/resources/sockjs.min.js" />"></script>
<script src="<c:url value="/resources/stomp.min.js" />"></script>
<script src="<c:url value="/resources/app.js" />"></script>

<style type="text/css">
.box {
	width: 100px;
	height: 100px;
}

.winBox {
	background-color: green;
}

.looseBox {
	background-color: red;
}
</style>
</head>
<body onload="xoWebSocketConnect()">
	<div class="container">
		<table border="1">
			<tr>
				<td id="cell_0_0" class="box" onclick="sendXoPosition(0,0)"></td>
				<td id="cell_0_1" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(0,1)"></td>
				<td id="cell_0_2" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(0,2)"></td>
			</tr>
			<tr>
				<td id="cell_1_0" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(1,0)"></td>
				<td id="cell_1_1" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(1,1)"></td>
				<td id="cell_1_2" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(1,2)"></td>
			</tr>
			<tr>
				<td id="cell_2_0" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(2,0)"></td>
				<td id="cell_2_1" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(2,1)"></td>
				<td id="cell_2_2" class="box" style="width: 100px; height: 100px;"
					onclick="sendXoPosition(2,2)"></td>
			</tr>
		</table>
		<div id="resultDiv"></div>
	</div>

</body>
</html>
