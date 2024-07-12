# middlewares.py
from django.contrib.auth import get_user_model
from django.utils.deprecation import MiddlewareMixin

class DisableAdminAuthMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.path.startswith('/admin/'):
            User = get_user_model()
            user = User.objects.get(username='admin')  # укажите имя пользователя администратора
            request.user = user
