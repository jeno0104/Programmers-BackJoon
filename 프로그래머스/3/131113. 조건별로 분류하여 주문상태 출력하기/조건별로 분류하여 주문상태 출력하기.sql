-- 코드를 입력하세요
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE, "%Y-%m-%d"),
IF(DATE_FORMAT("2022-05-01", "%Y-%m-%d") >= DATE_FORMAT(OUT_DATE, "%Y-%m-%d"), "출고완료", 
   IF(DATE_FORMAT("2022-05-01", "%Y-%m-%d") < DATE_FORMAT(OUT_DATE, "%Y-%m-%d"), "출고대기", "출고미정")) AS "출고여부"
FROM FOOD_ORDER
ORDER BY ORDER_ID;