<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>CrazyStairs</title>
    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!--<link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">-->
    <!-- Custom styles for this template -->
    <link href="assets/css/dashboard.css" rel="stylesheet">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!--<script src="../../assets/js/ie-emulation-modes-warning.js"></script>-->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body style="margin-top:30px;">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">CrazyStairs</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                @yield('welcome_name') <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="{{ url('/') }}">My Apps</a></li>
                <li><a href="{{ url('/admin') }}">Admin</a></li>
                <li><a href="{{ url('/logout') }}">Logout</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      @yield('content')
    </div>

    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type='text/javascript' src='//twitter.github.com/hogan.js/builds/3.0.1/hogan-3.0.1.js'></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!--<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>-->
    <script src='https://rawgit.com/Cloverstone/Berry/master/bin/full.berry.min.js'></script>
    <script src='https://rawgit.com/Cloverstone/Berry/master/bin/bootstrap.full.berry.js'></script> 
    <!--<script src='https://rawgit.com/Cloverstone/berryTables/master/bin/js/berryTables.min.js'></script> -->
    <script src='https://rawgit.com/Cloverstone/Cobler/master/bin/cobler.min.js'></script> 
    <script src='https://rawgit.com/Cloverstone/Cobler/master/bin/bootstrap.cobler.js'></script> 
    <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
    <script src='http://cdn.ractivejs.org/latest/ractive.js'></script>
    @yield('bottom_page_scripts')
    <!--<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js" charset="utf-8"></script>-->
    <!--<script type='text/javascript' src='//cdn.tinymce.com/4/tinymce.min.js'></script>-->
  </body>
</html>
