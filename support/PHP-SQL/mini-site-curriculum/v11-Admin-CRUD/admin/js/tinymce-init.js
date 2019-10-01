tinymce.init({
  selector: 'textarea#content',
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image media charmap anchor textcolor',
    'searchreplace visualblocks code fullscreen',
    'table paste code wordcount'
  ],
  toolbar: 'undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image media | code',
  content_css: [
    'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400',
    'css/admin.css'
  ]
});