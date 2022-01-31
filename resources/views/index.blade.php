<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
<!-- Primary Meta Tags -->
<title>Denebolatech: Helping you monitor your construction works in real time.</title>
<meta name="title" content="Denebolatech: Helping you monitor your construction works in real time.">
<meta name="description" content="We offer real time construction industry monitoring services making it easier for investors, proprietors and related stakeholders to oversee the progress of the works and plan ahead in times of disaster and stakeholder planning.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://denebolatech.com/">
<meta property="og:title" content="Denebolatech: Helping you monitor your construction works in real time.">
<meta property="og:description" content="We offer real time construction industry monitoring services making it easier for investors, proprietors and related stakeholders to oversee the progress of the works and plan ahead in times of disaster and stakeholder planning.">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://denebolatech.com/">
<meta property="twitter:title" content="Denebolatech: Helping you monitor your construction works in real time.">
<meta property="twitter:description" content="We offer real time construction industry monitoring services making it easier for investors, proprietors and related stakeholders to oversee the progress of the works and plan ahead in times of disaster and stakeholder planning.">
<meta property="twitter:image" content="">
<title>Denebolatech | Helping you monitor your construction works in real time. </title>
     
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">


<!-- Start of the tags -->    <!-- Scripts -->
    <script>
        window.App = {!! json_encode([
            'name' => config('app.name')
        ]) !!};
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!}; 
    </script>

    <!-- Styles -->
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link rel="icon" href="{{asset('favicon.ico')}}" />

</head>

<body >

<div id="root"></div>
<script src="{{ asset('js/app.js') }}" defer></script>

</body>

</html>