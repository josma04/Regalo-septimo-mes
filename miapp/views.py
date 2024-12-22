from django.shortcuts import render

def love_page(request):
    return render(request, 'miapp/index.html')

def login_view(request):
    return render(request, 'miapp/login.html')