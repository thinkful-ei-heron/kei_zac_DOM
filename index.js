'use strict';
$('.thumbnail').on('click', e => {
  console.log(e.target);
  //grab src url from thumbnail
  const url = $(e.target).attr('src');
  //grab src alt text from thumbnail
  const altText = $(e.target).attr('alt');
  //change src url for class 'hero'
  $('.hero').find('input').attr('src', url);
  $('.hero').find('input').attr('alt', altText);
});
