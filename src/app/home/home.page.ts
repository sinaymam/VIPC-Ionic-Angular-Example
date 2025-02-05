import { HttpClient } from '@angular/common/http';
import { Component, Renderer2, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton ],
})
export class HomePage {
  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngOnInit() {}

  generateSession() {
    this.http
      .post(
        'https://dev.api-gaming.paviliononline.io/sdk/api/patronsession/existing',
        {
          patronId: '1ef56720-47b6-46bc-9a3a-b11bd511d10b',
          sessionId: '9a18a240-34eb-4223-ab41-7620e955b71d',
          expires: '2025-02-05T16:46:30.7858665+00:00',
          enrollmentStatus: 'complete',
          vipCardNumber: '7210908875',
          operatorName: 'Dev - Finicity Operator',
          transactionSucceeded: false,
          depositLimit: 1000,
          minDeposit: 1,
          withdrawLimit: 1000,
          minWithdraw: 1,
          transactionId: '19bca5f07d441938e0544a4d',
          transactionAmount: 10,
          returnUrl: 'closevip://done',
          patronProductType: 'Preferred',
          oneClickDiscountApplied: false,
          oneTimePasscodePending: false,
        }
      )
      .subscribe({
        next: (response) => console.log('Response from Session', response),
        error: (e) => console.log('Error getting session'),
      });
  }

  launchVIPC() {
    this.generateSession();
    const script = this.renderer.createElement('script');
    script.src =
      'https://stsdkkazusenadev01.blob.core.windows.net/frontend/vip-preferred.min.js';
    script.type = 'type/javascript';
    script.async = true;
    document.body.appendChild(script);
  }
}
