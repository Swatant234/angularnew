import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake'; // Import pdfmake
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; // Import fonts for pdfmake
import { ViewportScroller } from '@angular/common';


// Register fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  vehiclesList:any[]=[];
  isEdit: boolean = false;
  VehiclesObj:any=
  {
    "carId":0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }
  


  constructor(private http:HttpClient,private viewportScroller: ViewportScroller) { 

    // this.getVehicles();

  }

  ngOnInit(): void {
    
  }


  getVehicles(){
    debugger
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any)=>{
      debugger
    this.vehiclesList=result.data;
    })
  }

  onSaveVehicles(){
    debugger
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.VehiclesObj).subscribe((res:any)=>{
      debugger;
     if(res.result)
     {
      alert("Vehicle Created Successfully");
      this.getVehicles();
      this.reset();

     }
     else{
      alert(res.message)
     }
    }
  )
  }


  updateVehicles(){
    debugger
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateNewCar",this.VehiclesObj).subscribe((res:any)=>{
      debugger;
     if(res.result)
     {
      alert("Vehicle Updated Successfully");
      this.getVehicles();
      this.reset();

     }
     else{
      alert(res.message)
     }
    }
  )
  }


  onEdit(data:any){
    debugger
    this.viewportScroller.scrollToPosition([0, 0]);

    this.VehiclesObj = data;
    this.isEdit= true;
    
  }



  reset(): void {
    // Clear the form values by resetting the model
    this.VehiclesObj = {
      brand: '',
      model: '',
      regNo: '',
      dailyRate: '',
      year: '',
      color: '',
      carImage: ''
    };
  }

 


  
  download() {
    // Define the table header (no need to add styles individually here)
    const header = [
      'Sr.No', 'Brand', 'Model', 'Reg No', 'Daily Rate'
    ];
  
    // Map the rows with data from vehiclesList
    const rows = this.vehiclesList.map((vehicle, index) => [
      index + 1, // SR. No
      vehicle.brand, // Brand
      vehicle.model, // Model
      vehicle.regNo, // Reg No
      vehicle.dailyRate, // Daily Rate
    ]);
  
    // Define the Base64 string of the logo (replace with your actual Base64 string)
    const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAA2CAIAAAAj52AyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4QzY1REE4MUUxMTExRUVBNDUxRjZEMDI3MjMyREYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4QzY1REE5MUUxMTExRUVBNDUxRjZEMDI3MjMyREYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MThDNjVEQTYxRTExMTFFRUE0NTFGNkQwMjcyMzJERjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MThDNjVEQTcxRTExMTFFRUE0NTFGNkQwMjcyMzJERjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz62G2H9AAAJ90lEQVR42uyc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'; // Replace with your actual Base64 string
  
    // Define the document structure for the PDF


    
    const docDefinition = {
      header: {
        table: {
          widths: ['15%', '70%', '15%'], // Left, Center, Right columns
          body: [
            [
              { image: logoBase64, width: 50, alignment: 'center', border: [true, true, true, true] }, // Image (Logo) on the left with border
              { text: 'Vehicle Data Report', style: 'header', alignment: 'center', border: [true, true, true, true] }, // Title in the center with border
              { text: new Date().toLocaleDateString(), style: 'dateBox', alignment: 'center', border: [true, true, true, true] }, // Date on the right with border
            ]
          ]
        },
        margin: [40, 20, 40, 20], // Add margin to the top
        border: [true, true, true, true], // Add a border around the entire header section
      },
      content: [
        {
          style: 'tableExample',
          table: {
            headerRows: 1, // The first row is the header row
            widths: ['10%', '30%', '20%', '20%', '20%'], // Define column widths
            body: [
              header, // Header row (no explicit styles for each cell here)
              ...rows  // Data rows
            ]
          }
        }
      ],
      footer: function (currentPage: number, pageCount: number) {
        // Get the current date and time
        const currentDateTime = new Date().toLocaleString(); // This will give you both the date and time in the user's local format
        
        return {
          columns: [
            { text: 'This document is generated electronically No Manual signature is required.', alignment: 'center', fontSize: 8 },
            { text: 'Exported On: ' + currentDateTime, alignment: 'right', fontSize: 8 }
          ],
          margin: [20,20, 40,0], // Margin for the footer
          fontSize: 8,
          alignment: 'center'
        };
      },
      
      styles: {
        header: {
          padding: [5, 10],
          fontSize: 10,
          alignment: 'left', // Align the date in the center of the box
        },
        tableExample: {
          padding: [5, 10],
          fontSize: 10,
          alignment: 'center', // Align the date in the center of the box
        },
        tableHeader: {
          fillColor: '#6c6c6c', // Background color for header
          color: 'white', // Text color for header
          fontSize: 10,
          bold: true,
          padding: [10, 20] // Padding for header cells
        },
        tableBody: {
          padding: [5, 20] // Padding for body cells (top/bottom, left/right)
        },
        dateBox: {
          padding: [5, 10],
          fontSize: 10,
          alignment: 'center', // Align the date in the center of the box
        }
      },
      defaultStyle: {
        fontSize: 10,
      }
    };
  
    // Ensure the table structure exists before modifying it
    if (
      docDefinition.content &&
      docDefinition.content[0] &&
      docDefinition.content[0].table &&
      docDefinition.content[0].table.body &&
      Array.isArray(docDefinition.content[0].table.body) &&
      docDefinition.content[0].table.body.length > 0 &&
      Array.isArray(docDefinition.content[0].table.body[0]) // Ensure the header row exists as an array
    ) {
      // Apply the global header style (tableHeader) to the first row (header row) globally
      docDefinition.content[0].table.body[0] = docDefinition.content[0].table.body[0].map(cell => ({
        text: cell,
        style: 'tableHeader' // Apply the global header style
      }));
  
      // Apply padding for the body rows
      for (let i = 1; i < docDefinition.content[0].table.body.length; i++) {
        docDefinition.content[0].table.body[i] = docDefinition.content[0].table.body[i].map(cell => ({
          text: cell,
          style: 'tableBody' // Apply body cell padding
        }));
      }
    } else {
      console.error('Error: Table body or header row is undefined or invalid');
    }
  
    // Generate and download the PDF
    pdfMake.createPdf(docDefinition).download('vehicle_data.pdf');
  }
}