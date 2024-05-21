import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideAnimations(), 
    provideToastr(), 
    provideFirebaseApp(() => initializeApp({"projectId":"practica-primer-parcial-a7ac9","appId":"1:496389963905:web:3f0f2cecb18e29ed8ecd80","storageBucket":"practica-primer-parcial-a7ac9.appspot.com","apiKey":"AIzaSyArpz0zUuK32wbWou3GCmQb--zZVinYXS8","authDomain":"practica-primer-parcial-a7ac9.firebaseapp.com","messagingSenderId":"496389963905"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
  
};
