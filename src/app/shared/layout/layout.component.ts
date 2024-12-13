import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  // Import NgbModal


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private route: Router, private spinner: NgxSpinnerService, private modalService: NgbModal) { }

  isSidebarCollapsed = false;
  expandedMenus: { [key: string]: boolean } = {
    masters: false,
  };

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSubmenu(menu: string): void {
    this.expandedMenus[menu] = !this.expandedMenus[menu];
  }


  logout(modal: any) {
    // this.spinner.show();



    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();

    // }, 2000);
    this.route.navigate([''])
    modal.close();
  }



  dismissModal(modalRef: any) {
    // Dismissing the modal manually
    modalRef.dismiss('Closed by user');
  }

  open(content: any) {
    // this.modalService.open(content);  // Open the modal
    // this.modalService.open(content, { size: 'lg' }); // Large modal
    this.modalService.open(content, { backdrop: 'static', keyboard: false });


  }

}
