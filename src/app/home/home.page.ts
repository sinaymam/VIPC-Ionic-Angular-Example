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
    this.http.post(
      'https://dev.api-gaming.paviliononline.io/sdk/api/patronsession/existing',
      {
        PatronId: '0ef56720-47b6-46bc-9a3a-b81bd511d10a',
        VipCardNumber: '7210975245',
        DateOfBirth: '04/15/1955',
        remainingDailyDeposit: '1133.99',
        walletBalance: '24',
        transactionId: 'onfgh34isdngtest1',
        transactionAmount: '1000',
        transactionType: 'deposit',
        productType: 0,
        oneClickDiscountApplied: false,
      }
    ).subscribe({
      next: (response) => console.log("Response from Session", response),
      error: (e) => console.log("Error getting session")
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
