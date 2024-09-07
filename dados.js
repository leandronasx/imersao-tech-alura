

let tecnologias = [
{
    tecnologia: "JavaScript",
    resumo: "Linguagem de programação interpretada que adiciona interatividade às páginas web. É a base para a maioria dos frameworks e bibliotecas JavaScript.",
    linkDocumentacao: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    LinkImg: "https://d33wubrfki0l68.cloudfront.net/60c190b71e34fb93e2b9ad2bbe1e81691db307a2/1ffff/assets/topic/topic-javascript-img-1.jpg",
    codigoExemplo: `
        <'script>
            'console.log("Hello, World!");
        <'/script>
    `
},
{
    tecnologia: "React",
    resumo: "Biblioteca JavaScript para construção de interfaces de usuário. Permite criar componentes reutilizáveis e aplicações complexas de forma eficiente.",
    linkDocumentacao: "https://pt-br.reactjs.org/",
    LinkImg: "https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png",
    codigoExemplo: `
        'import React from 'react';
        'import ReactDOM from 'react-dom/client';

        'function HelloWorld() {
          return <'h1>Hello, World!</h1>;
        }

        'const root = ReactDOM.createRoot(document.getElementById('root'));
        'root.render(<HelloWorld />);
    `
},

{
    tecnologia: "Angular",
    resumo: "Framework JavaScript de alto nível para construção de aplicações web single-page (SPA). É conhecido por sua estrutura robusta e comunidade ativa.",
    linkDocumentacao: "https://angular.io/",
    LinkImg: "https://miro.medium.com/v2/resize:fit:1400/1*cGDDA2mfYkjiIhGaN8gDoA.png",
    codigoExemplo: `
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {
          title = 'Meu app Angular';
        }
    `
},
{
    tecnologia: "Vue.js",
    resumo: "Framework JavaScript progressivo para construção de interfaces de usuário. É conhecido por sua curva de aprendizado suave e flexibilidade.",
    linkDocumentacao: "https://vuejs.org/",
    LinkImg: "https://i.ytimg.com/vi/DsuTwV0jwaY/maxresdefault.jpg",
    codigoExemplo: `
        <template>
          <'div id="app">
            <'h1>Hello Vue!</h1>
          </'div>
        </template>

        <'script>
          new Vue({
            el: '#app'
          })
        </'script>
    `
},

    {
        tecnologia: "HTML",
        resumo: "HTML (HyperText Markup Language) é a linguagem de marcação que serve como a base de todas as páginas da web. Imagine-a como o esqueleto de uma casa: ela define a estrutura, a organização e o conteúdo de cada página.",
        linkDocumentacao: "https://pt.wikipedia.org/wiki/HTML",
        LinkImg: "https://blog.soaresdev.com/static/926ea487dfd0dc0bc35bef57c3e7b6a8/7422e/html5.png",
        codigoExemplo: `
                <'!DOCTYPE html>
                <'html>
                    <'head>
                        <'title>Meu primeiro site</title>
                    <'/head>
                    <'body>
                        <'p>Hello, World!</p>
                    <'/body>
                <'/html>
        `
    },
    {
      tecnologia: "Node.js",
      resumo: "Node.js é um ambiente de tempo de execução JavaScript que permite construir aplicações de servidor escaláveis. É amplamente utilizado para criar APIs, aplicações em tempo real e back-ends de aplicações web.",
      linkDocumentacao: "https://nodejs.org/en",
      LinkImg: "https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com017.jpg",
      codigoExemplo: `
            const http = require('http');
    
            const hostname = '127.0.0.1';
            const port = 3000;
    
            const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
            });
        `
    },
    {
      tecnologia: "Express.js",
      resumo: "Express.js é um framework minimalista e flexível para Node.js, utilizado para criar APIs RESTful e aplicações web.",
      linkDocumentacao: "https://expressjs.com/",
      LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEjCQNyD3_JGsmTZ1Ng0a3WefsXra98wzCw&s",
      codigoExemplo: `
        const express = require('express');
        const app = express();
        const port = 3000;
  
        app.get('/', (req, res) => {
          res.send('Hello from Express!');
        });
        `
    },
        {
          tecnologia: "PHP",
          resumo: "PHP é uma linguagem de scripting popular para desenvolvimento web. É amplamente utilizada para criar sites dinâmicos e aplicativos web.",
          linkDocumentacao: "https://www.php.net/",
          LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpwtWts6Xe6RUah8OBO27pisqT7n0FLHskw&s",
          codigoExemplo: `
            <'?php
            echo "Hello, World!";
            ?>
          `
        },
        {
          tecnologia: "Laravel",
          resumo: "Laravel é um framework PHP para desenvolvimento web que segue o padrão MVC. Ele oferece uma sintaxe elegante e ferramentas poderosas para criar aplicações web robustas.",
          linkDocumentacao: "https://laravel.com/",
          LinkImg: "https://belenos.me/media/2021-06-laravel.webp",
          codigoExemplo: `
            <'?php
      
            use Illuminate\Support\Facades\Route;
      
            Route::get('/', function () {
                return 'Hello, World!';
            });
          `
        },
        {
          tecnologia: "Django",
          resumo: "Django é um framework Python de alto nível para desenvolvimento web. Ele segue o padrão MVC e promove um desenvolvimento rápido e limpo.",
          linkDocumentacao: "https://www.djangoproject.com/",
          LinkImg: "https://blog.geekhunter.com.br/wp-content/uploads/2020/08/django-framework.png",
          codigoExemplo: `
            from django.http import HttpResponse
      
            def index(request):
                return HttpResponse("Hello, World!")
          `
        },
        {
          tecnologia: "Ruby on Rails",
          resumo: "Ruby on Rails é um framework web completo para a linguagem de programação Ruby. Ele segue a convenção sobre configuração e promove um desenvolvimento rápido e produtivo.",
          linkDocumentacao: "https://rubyonrails.org/",
          LinkImg: "https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png",
          codigoExemplo: `
            class ApplicationController < ActionController::Base
              def hello
                render plain: 'Hello, World!'
              end
            end
          `
        },
        {
          tecnologia: "TypeScript",
          resumo: "TypeScript é um superconjunto tipado de JavaScript que adiciona recursos de tipagem estática para melhorar a segurança e a manutenibilidade do código.",
          linkDocumentacao: "https://www.typescriptlang.org/",
          LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25IjnQtY9QrOrNTysKRPYELUiZy_5YMNNNDFI6IfMlWNdDMCJVVSsrEVzL0Rv5EfHCco&usqp=CAU",
          codigoExemplo: `
            'console.log('Hello, World!');
          `
        },
            {
              tecnologia: "Android",
              resumo: "Android é um sistema operacional móvel baseado no núcleo Linux, desenvolvido principalmente para dispositivos touchscreen, como smartphones e tablets.",
              linkDocumentacao: "https://developer.android.com/",
              LinkImg: "https://t2.tudocdn.net/290661?w=567&h=340",
              codigoExemplo: 
              `
              'package com.example.myapp
          
              'import androidx.appcompat.app.AppCompatActivity
              'import android.os.Bundle
          
              'class MainActivity : AppCompatActivity() {
                  'override fun onCreate(savedInstanceState: Bundle?) {
                      'super.onCreate(savedInstanceState)
                      'setContentView(R.layout.activity_main)
                  }
              }
              `
            },
            {
              tecnologia: "Flutter",
              resumo: "Flutter é um SDK de código aberto do Google para criar aplicativos nativos compilados para mobile, web e desktop a partir de uma única base de código.",
              linkDocumentacao: "https://flutter.dev/",
              LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgyQs0_ylwqt5JKiuP_5LeW4WJB3P1bBGrtEnqX7EMNQ5QpugKF4LoUGRu4lUZ6S-QGI&usqp=CAU",
              codigoExemplo: // Um exemplo básico em Dart para criar um aplicativo Flutter:
              `
              'import 'package:flutter/material.dart';
          
              'void main() {
                runApp(const MyApp());
              }
          
              'class MyApp extends StatelessWidget {
                @override
                Widget build(BuildContext context) {
                  return MaterialApp(
                    title: 'Flutter Demo',
                    home: Scaffold(
                      appBar: AppBar(
                        title: const Text('Hello, World!'),
                      ),
                      body: const Center(
                        child: Text('Hello, World!'),
                      ),
                    ),
                  );
                }
              }
              `
            },
            {
              tecnologia: "React Native",
              resumo: "React Native é um framework para criar aplicativos móveis nativos usando React, a biblioteca JavaScript para construção de interfaces de usuário.",
              linkDocumentacao: "https://reactnative.dev/",
              LinkImg: "https://qubited.com/wp-content/uploads/2023/02/react-native.png",
              codigoExemplo: // Um exemplo básico em JavaScript para criar um componente React Native:
              `
              'import React from 'react';
              'import { View, Text } from 'react-native';
          
              'const App = () => {
                'return (
                  <'View>
                    <'Text>Hello, world!</Text>
                  </'View>
                );
              };
          
              'export default App;
              `
            },
            {
              tecnologia: "Ionic",
              resumo: "Ionic é um framework de código aberto para desenvolvimento de aplicativos híbridos usando tecnologias web como HTML, CSS e JavaScript.",
              linkDocumentacao: "https://ionicframework.com/",
              LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDKY5toFIXPRybrfCKxT_26GuIb8TEabUng&s",
              codigoExemplo: // Um exemplo básico em TypeScript para criar uma página Ionic:
              `
              'import { Component } from '@angular/core';
          
              @Component({
                selector: 'app-home',
                templateUrl: 'home.page.html',
                styleUrls: ['home.page.scss']
              })
              'export class HomePage {
                constructor() {}
              }
              `
            },
            {
              tecnologia: "SwiftUI",
              resumo: "SwiftUI é um framework declarativo para construir interfaces de usuário nativas para todas as plataformas Apple, usando a linguagem Swift.",
              linkDocumentacao: "https://developer.apple.com/documentation/swiftui",
              LinkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2Qz3MN6sEUPUyLFCKY-agal0LjGjOjxXdg&s",
              codigoExemplo: // Um exemplo básico em Swift para criar uma View SwiftUI:
              `
              'import SwiftUI
          
              struct ContentView: View {
                  var body: some View {
                      Text("Hello, World!")
                  }
              }
              `
            }
          ];