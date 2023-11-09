-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2023 at 02:48 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learnenglish`
--

CREATE DATABASE learnenglish;

use learnenglish;

CREATE TABLE `content_lession` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(6000) NOT NULL,
  `englishVocabulary` varchar(255) NOT NULL,
  `vietnameseVocabulary` varchar(255) NOT NULL,
  `audio` varchar(6000) NOT NULL,
  `answer_func1` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `content_lession` (`id`, `name`, `img`, `englishVocabulary`, `vietnameseVocabulary`, `audio`, `answer_func1`) VALUES
(1, 'Shapes', '../public/image/img_content_learn/Shapes/1.1.png', 'circle', 'hình tròn', '../public/audio/Shapes/1.1.mp3', 'hình tròn\r\n-\r\ncircle /ˈsɜːrkl/ (n): hình tròn'),
(2, 'Shapes', '../public/image/img_content_learn/Shapes/1.2.png', 'triangle', 'hình tam giác', '../public/audio/Shapes/1.2.mp3', 'hình tam giác\r\n-\r\ntriangle /ˈtraɪæŋɡl/ (n): hình tam giác'),
(3, 'Shapes', '../public/image/img_content_learn/Shapes/1.3.png', 'square', 'hình vuông', '../public/audio/Shapes/1.3.mp3', 'hình vuông\r\n-\r\nsquare /skwer/ (n): hình vuông'),
(4, 'Shapes', '../public/image/img_content_learn/Shapes/1.4.png', 'rectangle', 'hình chữ nhật', '../public/audio/Shapes/1.4.mp3', 'hình chữ nhật\r\n-\r\nrectangle /ˈrektæŋɡl/ (n): hình chữ nhật'),
(5, 'Shapes', '../public/image/img_content_learn/Shapes/1.5.png', 'oval', 'hình bầu dục, hình trái xoan', '../public/audio/Shapes/1.5.mp3', 'hình bầu dục, hình trái xoan\r\n-\r\noval /ˈoʊvl/ (n): hình trái xoan'),
(6, 'Shapes', '../public/image/img_content_learn/Shapes/1.6.png', 'star', 'hình ngôi sao', '../public/audio/Shapes/1.6.mp3', 'hình ngôi sao\r\n-\r\nstar /stɑːr/ (n): hình ngôi sao'),
(7, 'Shapes', '../public/image/img_content_learn/Shapes/1.7.png', 'diamond', 'hình kim cương', '../public/audio/Shapes/1.7.mp3', 'hình kim cương\r\n-\r\ndiamond /ˈdaɪəmənd/ (n): hình kim cương'),
(8, 'Shapes', '../public/image/img_content_learn/Shapes/1.8.png', 'sphere', 'hình cầu', '../public/audio/Shapes/1.8.mp3', 'hình cầu\r\n-\r\nsphere /sfɪr/ (n): hình cầu'),
(9, 'Shapes', '../public/image/img_content_learn/Shapes/1.9.png', 'semicircle', 'hình bán nguyệt, nửa hình tròn', '../public/audio/Shapes/1.9.mp3', 'hình bán nguyệt, nửa hình tròn\r\n-\r\nsemicircle /ˈsemisɜːrkl/ (n): hình bán nguyệt'),
(10, 'Colors', '../public/image/img_content_learn/Colors/2.1.png', 'black', 'màu đen', '../public/audio/Colors/2.1.mp3', 'màu đen\r\n-\r\nblack /blæk/ (n, adj): màu đen\r\n\r\n'),
(11, 'Colors', '../public/image/img_content_learn/Colors/2.2.png', 'white', 'màu trắng', '../public/audio/Colors/2.2.mp3', 'màu trắng\r\n-\r\nwhite /waɪt/ (n, adj): màu trắng'),
(12, 'Colors', '../public/image/img_content_learn/Colors/2.3.png', 'brown', 'màu nâu', '../public/audio/Colors/2.3.mp3', 'màu nâu\r\n-\r\nbrown /braʊn/ (n, adj): màu nâu'),
(13, 'Colors', '../public/image/img_content_learn/Colors/2.4.png', 'red', 'màu đỏ', '../public/audio/Colors/2.4.mp3', 'màu đỏ\r\n-\r\nred /red/ (n, adj): màu đỏ'),
(14, 'Colors', '../public/image/img_content_learn/Colors/2.5.png', 'blue', 'màu xanh dương', '../public/audio/Colors/2.5.mp3', 'màu xanh dương\r\n-\r\nblue /bluː/ (n, adj): màu xanh dương'),
(15, 'Colors', '../public/image/img_content_learn/Colors/2.6.png', 'pink', 'màu hồng', '../public/audio/Colors/2.6.mp3', 'màu hồng\r\n-\r\npink /pɪŋk/ (n, adj): màu hồng'),
(16, 'Colors', '../public/image/img_content_learn/Colors/2.7.png', 'yellow', 'màu vàng', '../public/audio/Colors/2.7.mp3', 'màu vàng\r\n-\r\nyellow /ˈjeloʊ/ (n, adj): màu vàng'),
(17, 'Colors', '../public/image/img_content_learn/Colors/2.8.png', 'green', 'màu xanh lá', '../public/audio/Colors/2.8.mp3', 'màu xanh lá\r\n-\r\ngreen /ɡriːn/ (n, adj): màu xanh lá'),
(18, 'Colors', '../public/image/img_content_learn/Colors/2.9.png', 'orange', 'màu cam', '../public/audio/Colors/2.9.mp3', 'màu cam\r\n-\r\norange /ˈɔːrɪndʒ/ (n, adj): màu cam'),
(19, 'Colors', '../public/image/img_content_learn/Colors/2.10.png', 'purple', 'màu tím', '../public/audio/Colors/2.10.mp3', 'màu tím\r\n-\r\npurple /ˈpɜːrpl/ (n, adj): màu tím'),
(20, 'Colors', '../public/image/img_content_learn/Colors/2.11.png', 'dark green', 'màu xanh lá đậm', '../public/audio/Colors/2.11.mp3', 'màu xanh lá đậm\r\n-\r\ndark green /dɑːrk ɡriːn/ (n, adj): màu xanh lá đậm'),
(21, 'Colors', '../public/image/img_content_learn/Colors/2.12.png', 'light blue', 'màu xanh dương nhạt', '../public/audio/Colors/2.12.mp3', 'màu xanh dương nhạt\r\n-\r\nlight blue /laɪt bluː/ (n, adj): màu xanh dương nhạt'),
(22, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.1.png', 'first', 'thứ nhất', '../public/audio/OrdinalNumbers/3.1.mp3', ''),
(23, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.2.png', 'second', 'thứ hai', '../public/audio/OrdinalNumbers/3.2.mp3', ''),
(24, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.3.png', 'third', 'thứ ba', '../public/audio/OrdinalNumbers/3.3.mp3', ''),
(25, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.4.png', 'fourth', 'thứ tư', '../public/audio/OrdinalNumbers/3.4.mp3', ''),
(26, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.5.png', 'fifth', 'thứ năm', '../public/audio/OrdinalNumbers/3.5.mp3', ''),
(27, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.6.png', 'sixth', 'thứ sáu', '../public/audio/OrdinalNumbers/3.6.mp3', ''),
(28, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.7.png', 'seventh', 'thứ bảy', '../public/audio/OrdinalNumbers/3.7.mp3', ''),
(29, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.8.png', 'eighth', 'thứ tám', '../public/audio/OrdinalNumbers/3.8.mp3', ''),
(30, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.9.png', 'ninth', 'thứ chín', '../public/audio/OrdinalNumbers/3.9.mp3', ''),
(31, 'Ordinal numbers', '../public/image/img_content_learn/OrdinalNumbers/3.10.png', 'tenth', 'thứ mười', '../public/audio/OrdinalNumbers/3.10.mp3', ''),
(32, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.1.png', 'a half', 'một nửa', '../public/audio/Numbers&Fractions/4.1.mp3', ''),
(33, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.2.png', 'a third', 'một phần ba', '../public/audio/Numbers&Fractions/4.2.mp3', ''),
(34, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.3.png', 'a quarter', 'một phần tư', '../public/audio/Numbers&Fractions/4.3.mp3', ''),
(35, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.4.png', 'two-thirds', 'hai phần ba', '../public/audio/Numbers&Fractions/4.4.mp3', ''),
(36, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.5.png', 'once', 'một lần', '../public/audio/Numbers&Fractions/4.5.mp3', ''),
(37, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.6.png', 'twice', 'hai lần', '../public/audio/Numbers&Fractions/4.6.mp3', ''),
(38, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.7.png', 'three times', 'ba lần', '../public/audio/Numbers&Fractions/4.7.mp3', ''),
(39, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.8.png', 'even number', 'số chẳn', '../public/audio/Numbers&Fractions/4.8.mp3', ''),
(40, 'Numbers & Fractions', '../public/image/img_content_learn/Numbers&Fractions/4.9.png', 'odd number', 'số lẻ', '../public/audio/Numbers&Fractions/4.9.mp3', '');



CREATE TABLE `content_lession_elocution` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `video` varchar(6000) NOT NULL,
  `img_xacDinhCauTrucCau` varchar(6000) NOT NULL,
  `img_xacDinhThanhPhanCau` text NOT NULL,
  `sentenceComponents` varchar(1000) NOT NULL,
  `sentenceStructures` varchar(1000) NOT NULL,
  `paragraph_5` text NOT NULL,
  `answer_55` text NOT NULL,
  `answer_2` text NOT NULL,
  `answer_3` text NOT NULL,
  `answer_5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `content_lession_elocution` (`id`, `name`, `video`, `img_xacDinhCauTrucCau`, `img_xacDinhThanhPhanCau`, `sentenceComponents`, `sentenceStructures`, `paragraph_5`, `answer_55`, `answer_2`, `answer_3`, `answer_5`) VALUES
(1, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.1.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.1.png', 'Complement', 'S + linking verb + Adj', 'Câu chứa cấu trúc \"S + linking verb + N\" là:', 'He is a professor at MIT.', 'Complement -\r\n\r\nCô ấy là bạn cùng lớp với tôi ở trường.', 'S + linking verb + Adj -\r\n\r\nLớp học mới trông đẹp.', 'He is a professor at MIT. -\r\n\r\nAnh ấy là giáo sư ở trường MIT.'),
(3, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.2.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.2.png', 'Object', 'S + V + O', 'Câu chứa cấu trúc \"S + linking verb + Adj\" là:', 'Jenny seemed nervous.', 'Object -\r\n\r\nAnh ấy đã mở cửa nhẹ nhàng nhưng đứa bé vẫn tỉnh dậy.', 'S + V + O -\r\n\r\nTôi đã làm 1 cái bánh nhân dịp sinh nhật thứ 50 của mẹ tôi, và mẹ yêu (thích) nó.', 'Jenny seemed nervous. -\r\n\r\nJenny dường như đã hồi hộp.'),
(4, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.3.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.3.png', 'Subject', 'S + linking verb + Adj', 'Câu chứa cấu trúc \"S + V + O\" là:', 'Tim and his colleagues usually have lunch at 12:30 p.m.', 'Subject -\r\n\r\nChú John là người họ hàng yêu thích của tôi trong gia đình.', 'S + linking verb + Adj -\r\n\r\nCô ấy có vẻ thân thiện khi chúng tôi gặp nhau.', 'Tim and his colleagues usually have lunch at 12:30 p.m. -\r\n\r\nTim và các đồng nghiệp của anh ấy thường ăn trưa lúc 12 giờ 30 phút.'),
(5, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.4.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.4.png', 'Complement', 'S + V', 'Câu chứa cấu trúc \"S + V + C\" là:', 'I am happy that it is Friday night.', 'Complement -\r\n\r\nCô ấy đã trở thành một giáo viên tiếng Anh sau 4 năm học đại học.', 'S + V -\r\n\r\nChúng tôi sẽ đi dự 1 bữa tiệc.', 'I am happy that it is Friday night. -\r\n\r\nTôi mừng vì giờ là tối thứ 6.'),
(6, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.5.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.5.png', 'Object', 'S + linking verb + N', 'Câu chứa cấu trúc \"S + V + O + C\" là:', 'We painted the fence green.', 'Object -\r\n\r\nCô ấy đã bắt tôi làm việc mà tôi không thích.', 'S + linking verb + N -\r\n\r\nCô ấy là một học sinh trong lớp của anh ấy khi họ yêu nhau.', 'We painted the fence green. -\r\n\r\nChúng tôi đã sơn hàng rào màu xanh lá cây.'),
(7, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.6.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.6.png', 'Complement', 'S + V + O + C', 'Câu chứa cấu trúc \"S + V + O + O\" là:', 'Devin bought me a cup of bubble tea on the way home.', 'Complement -\r\n\r\nBố anh ấy khác với những gì tôi đã mong đợi.', 'S + V + O + C -\r\n\r\nSelena thấy bữa tiệc thực sự tuyệt vời.', 'Devin bought me a cup of bubble tea on the way home. -\r\n\r\nDevin đã mua cho tôi một cốc trà sữa chân châu trên đường về nhà.'),
(8, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.7.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.7.png', 'Subject', 'S + V + O + O', 'Câu chứa cấu trúc \"S + V + O + C\" là:', 'Most people find learning foreign languages challenging.', 'Subject -\r\n\r\nAnh ấy vẫn độc thân sau gần 10 năm.', 'S + V + O + O -\r\n\r\nAnh ấy đã tặng tôi 1 món quà vào ngày sinh nhật của tôi.', 'Most people find learning foreign languages challenging. -\r\n\r\nHầu hết mọi người nhận thấy việc học ngoại ngữ khá thử thách.'),
(9, 'Sentence Structures', '../public/video/sentenceStructures/Lesson 1 _  Sentence Structures.mp4', '../public/image/sentenceStructures/xacDinhCauTrucCau/1.2.8.png', '../public/image/sentenceStructures/xacDinhThanhPhanCau/1.1.8.png', 'Object', 'S + V + O + C', 'Câu chứa cấu trúc \"S + V\" là:', 'The number of foreign companies in Vietnam continues to grow.', 'Object -\r\n\r\nJane đã gửi cho tôi rất nhiều thiệp khi cô ấy ở Paris.', 'S + V + O + C -\r\n\r\nTiếng ồn từ quán karaoke đã khiến tôi phát điên.', 'The number of foreign companies in Vietnam continues to grow. -\r\n\r\nSố lượng công ty nước ngoài ở Việt Nam tiếp tục tăng lên.');



CREATE TABLE `content_lession_elocution_arrange_structures` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `vietnameseParagraph` varchar(6000) NOT NULL,
  `englishParagraph` varchar(6000) NOT NULL,
  `img` text NOT NULL,
  `answer` text NOT NULL,
  `answer_6` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `content_lession_elocution_arrange_structures` (`id`, `name`, `vietnameseParagraph`, `englishParagraph`, `img`, `answer`, `answer_6`) VALUES
(1, 'Sentence Structures', 'Thời tiết đang trở nên đẹp hơn.', 'The weather is getting better.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.1.png', 'False', 'Correct sentence: This dress looks beautiful on you. (Chiếc váy này bạn mặc đẹp.)'),
(2, 'Sentence Structures', 'Tommy thường thức dậy vào lúc 6 giờ 45 phút sáng.', 'Tommy usually wakes up at 6:45 a.m.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.2.png', 'False', 'Correct sentence: He received the letter from her. (Anh ấy đã nhận lá thư cô ấy.)'),
(3, 'Sentence Structures', 'Cậu đã cho quá nhiều muối vào thức ăn.', 'You have put too much salt in the food.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.3.png', 'True', 'Anh ấy đã để con cún của anh ấy ở 1 mình trong ngôi nhà.'),
(4, 'Sentence Structures', 'Vợ anh ấy hay nấu bữa tối vào tầm 6 giờ.', 'His wife often cooks dinner around 6 o\'clock.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.4.png', 'False', 'Correct sentence: Peter usually stays up late. (Peter thường xuyên thức khuya.)'),
(5, 'Sentence Structures', 'Cô ấy đã đặt tên con trai mình là Peter.', 'She named her son Peter.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.5.png', 'False', 'Correct sentence: The doctor gave her medicine. (Bác sĩ đã đưa thuốc cho cô ấy.)'),
(6, 'Sentence Structures', 'Anh đã đợi bên ngoài ngôi nhà của em đến tận 8 giờ 30 tối.', 'I waited outside your house till 8:30 p.m.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.6.png', 'False', 'Correct sentence: Barbara often feels bad after drinking alcohol. (Barbara thường cảm thấy tệ sau khi uống rượu.)'),
(7, 'Sentence Structures', 'Họ đã làm nhà tôi bừa bộn khi tôi vắng nhà.', 'They made my house a mess when I was away.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.7.png', 'True', 'Bạn có thể chỉ cho tôi đường đến siêu thị gần nhất được không?'),
(8, 'Sentence Structures', 'John nói anh ấy thấy bài báo của tôi thực sự thú vị.', 'John said he found my article really interesting.', '../public/image/sentenceStructures/chooseTrueOrFalse/1.5.8.png', 'True', 'Cô ấy đã tặng tôi 1 chiếc vé xem phim miễn phí.');



CREATE TABLE `content_paragraph` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `vietnameseVocabulary` varchar(1000) NOT NULL,
  `englishVocabulary` varchar(1000) NOT NULL,
  `paragraph` varchar(6000) NOT NULL,
  `audio` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `content_paragraph` (`id`, `name`, `vietnameseVocabulary`, `englishVocabulary`, `paragraph`, `audio`) VALUES
(1, 'Shapes', 'hình cầu', 'sphere', 'The Earth is shaped like a ____.', '../public/audio/Shapes/1.8.mp3'),
(2, 'Shapes', 'hình tròn', 'circle', 'Wheels are shaped like a ____.', '../public/audio/Shapes/1.1.mp3'),
(3, 'Shapes', 'hình ngôi sao', 'star', '____-shaped lanterns are symbols of Mid-Autumn Festival in Vietnam.', '../public/audio/Shapes/1.6.mp3'),
(4, 'Shapes', 'hình vuông', 'square', 'That clock is shaped like a ____. It has 4 equal sides.', '../public/audio/Shapes/1.3.mp3'),
(5, 'Shapes', 'hình chữ nhật', 'rectangle', 'A 50,000 dong note is shaped like a ____.', '../public/audio/Shapes/1.4.mp3'),
(6, 'Shapes', 'hình tam giác', 'triangles', 'The pyramids look like____.', '../public/audio/Shapes/1.2.mp3'),
(7, 'Shapes', 'hình bầu dục, hình trái xoan', 'oval', 'Her face is shaped like an egg. She has a/an ____-shaped face.', '../public/audio/Shapes/1.5.mp3'),
(8, 'Shapes', 'hình bán nguyệt, nửa hình tròn', 'semicircle', 'You can see a ____ in the middle of a basketball court.', '../public/audio/Shapes/1.9.mp3'),
(9, 'Colors', 'màu đen', 'black', 'An iced ____ coffee, please.', '../public/audio/Colors/2.1.mp3'),
(10, 'Colors', 'màu trắng', 'white', 'She has beautiful ____ teeth.', '../public/audio/Colors/2.2.mp3'),
(11, 'Colors', 'màu đỏ', 'red', 'You should stop when the traffic lights change to ____.', '../public/audio/Colors/2.4.mp3'),
(12, 'Colors', 'màu xanh dương', 'blue', 'Alex is so handsome. He has ocean ____ eyes.', '../public/audio/Colors/2.5.mp3'),
(13, 'Colors', 'màu hồng', 'pink', 'The shrimps turn ____ when they cook them.', '../public/audio/Colors/2.6.mp3'),
(14, 'Colors', 'màu xanh lá - màu vàng', 'green - yellow', 'When Latundan bananas change color from ____ to ____, they are ready to eat.', ''),
(15, 'Colors', 'màu xanh lá', 'green', 'It\'s difficult to find fresh ____ grass for our cows in winter.', '../public/audio/Colors/2.8.mp3'),
(16, 'Colors', 'màu đen', 'black', 'Which one do you prefer - ____ tea or green tea?', '../public/audio/Colors/2.1.mp3');



CREATE TABLE `content_paragraph_hearfrom` (
  `id` int(11) NOT NULL,
  `name` varchar(5000) NOT NULL,
  `vietnameseVocabulary` varchar(5000) NOT NULL,
  `englishVocabulary` varchar(5000) NOT NULL,
  `paragraph` varchar(500) NOT NULL,
  `audio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `content_paragraph_hearfrom` (`id`, `name`, `vietnameseVocabulary`, `englishVocabulary`, `paragraph`, `audio`) VALUES
(1, 'Shapes', 'hình tròn', 'circle', 'Wheels are shaped like a ___.', '../public/audio/Shapes/Shapes_paragraph/1.1.mp3'),
(2, 'Shapes', 'hình tam giác', 'triangles', 'The pyramids look like ___.', '../public/audio/Shapes/Shapes_paragraph/1.2.mp3'),
(3, 'Shapes', 'hình vuông', 'square', 'This clock is shaped like a ___.', '../public/audio/Shapes/Shapes_paragraph/1.3.mp3'),
(4, 'Shapes', 'hình chữ nhật', 'rectangle', 'Money is shaped like a ___.', '../public/audio/Shapes/Shapes_paragraph/1.4.mp3'),
(5, 'Shapes', 'hình bầu dục, hình trái xoan', 'oval', 'She has an ____-shaped face.', '../public/audio/Shapes/Shapes_paragraph/1.5.mp3'),
(6, 'Shapes', 'hình ngôi sao', 'star', 'I bought a ____-shaped notepad yesterday.', '../public/audio/Shapes/Shapes_paragraph/1.6.mp3'),
(7, 'Shapes', 'hình kim cương', 'diamond', 'This necklace looks like a ____.\r\n', '../public/audio/Shapes/Shapes_paragraph/1.7.mp3'),
(8, 'Shapes', 'hình cầu', 'sphere', 'The Earth is shaped like a ____.', '../public/audio/Shapes/Shapes_paragraph/1.8.mp3'),
(9, 'Shapes', 'hình bán nguyệt, nửa hình tròn', 'semicircle', 'You can see a ____ on the basketball court.', '../public/audio/Shapes/Shapes_paragraph/1.9.mp3');



CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(6000) NOT NULL,
  `content` varchar(6000) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `course` (`id`, `name`, `img`, `content`, `title`) VALUES
(1, 'elocution', '../public/image/course/ngu-phap-co-ban_1539663532.png', 'Nắm vững các kiến thức ngữ pháp cơ bản trong tiếng Anh.', 'Ngữ Pháp Cơ Bản'),
(2, 'vocabulary', '../public/image/course/1000-tu-vung-tieng-anh-co-ban_1538706416.png', 'Ghi nhớ nhanh hơn 1000 từ vựng cơ bản với\r\ncác game tương tác.', '1000 Từ Vựng Cơ Bản'),
(3, 'pronounce', '../public/image/course/khoa-phat-am-co-ban_1548821170.png', 'Cung cấp các kiến thức về phát âm từ cơ bản tới nâng cao', 'Khóa Phát Âm Cơ Bản'),
(4, 'communicate', '../public/image/course/tieng-anh-giao-tiep-co-ban_1557809625.png', 'Giao tiếp từ cơ bản đến nâng cao qua 60\r\ntình huống thường gặp trong đời.', 'Tiếng Anh Giao Tiếp Cơ Bản');



CREATE TABLE `lesson_list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `parameters` varchar(500) NOT NULL,
  `img` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `lesson_list` (`id`, `name`, `title`, `content`, `parameters`, `img`) VALUES
(1, 'Shapes', 'Lesson 1', 'Các hình dạng trong tiếng Anh', 'Shapes', '../public/image/img_content_learn _list/1.png'),
(2, 'Colors', 'Lesson 2', 'Các màu sắc trong tiếng Anh', 'Colors', '../public/image/img_content_learn _list/2.png'),
(3, 'Ordinal numbers', 'Lesson 3', 'Cách nói số thứ tự trong tiếng Anh', 'Ordinal numbers', '../public/image/img_content_learn _list/3.png'),
(4, 'Numbers & Fractions', 'Lesson 4', 'Cách nói phân số và các loại số', 'Numbers & Fractions', '../public/image/img_content_learn _list/4.png');



CREATE TABLE `lesson_list_elocution` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `content` varchar(6000) NOT NULL,
  `parameters` varchar(500) NOT NULL,
  `img` varchar(6000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `lesson_list_elocution` (`id`, `name`, `title`, `content`, `parameters`, `img`) VALUES
(1, 'Sentence Structures', 'Lesson 1', 'Các cấu trúc câu cơ bản', 'Sentence Structures', '../public/image/img_content_learn _list_elocution/1.png'),
(2, 'Pronouns', 'lesson 2', 'Đại từ', 'Pronouns', '../public/image/img_content_learn _list_elocution/2.png');


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `img` varchar(6000) NOT NULL,
  `point` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `phoneNumber`, `img`, `point`) VALUES
(1, 'Quân', 'Hà Hoàng ', 'hahoangquan2@gmail.com', '0941703743hhQ@', '0941703743', '../public/image/login/375664217_1342574439951213_3914003967176323577_n.jpg', '2139'),
(2, 'Linh', 'Trần Nữ Thùy', 'thuylinh2@gmail.com', '0941703743hhQ@', '01653050442', '../public/image/login/Anh-IU.jpg', '900237'),
(3, 'one', 'admin', 'adminOne@gmail.com', '01653050442hhQ@', '0927384763', '../public/image/login/anh pc all.png', '600000'),
(4, 'Two', 'Admin', 'adminTwo@gmail.com', '01653050442hhQ@', '0988765367', '../public/image/login/thuylinh.jpg', '1000'),
(5, '3', 'admin', 'admin3@gmail.com', '01653050442hhQ@', '09876352781', '../public/image/login/bo-suu-tap-nhung-con-meo-dep-nhat-cho-hinh-nen-may-tinh-va-dien-thoai-8.jpeg', '2'),
(6, '1', 'client', 'client1@gmail.com', '01653050442hhQ@', '0178903678', '../public/image/login/Hoàng Quân.jpg', '6000'),
(7, '2', 'client', 'client2@gmail.com', '01653050442hhQ@', '0978367890', '../public/image/login/0106_hinh-nen-4k-may-tinh47.jpg', '300000'),
(8, '3', 'client', 'client3@gmail.com', '01653050442hhQ@', '0987630456', '../public/image/login/sleepy_kitten-1920x1080.jpg', '80000'),
(58, 'name', 'what your', 'whatyourname2@gmail.com', '0941703743hhQ@', '09876543245', '../public/image/login/Hình-nền-máy-tính-3d-sáng-tạo.jpg', '');


ALTER TABLE `content_lession`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `content_lession_elocution`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `content_lession_elocution_arrange_structures`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `content_paragraph`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `content_paragraph_hearfrom`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `lesson_list`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `lesson_list_elocution`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `content_lession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;


ALTER TABLE `content_lession_elocution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;


ALTER TABLE `content_lession_elocution_arrange_structures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;


ALTER TABLE `content_paragraph`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;


ALTER TABLE `content_paragraph_hearfrom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;


ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


ALTER TABLE `lesson_list_elocution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

