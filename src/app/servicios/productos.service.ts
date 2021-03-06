import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    endPointProducto: string =   environment.endPoint + '/producto';

    constructor(private httpClient: HttpClient) { }

    getProductos() {
      return this.httpClient.get(this.endPointProducto)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }

    getProductoId(_id: string) {
      return this.httpClient.get(this.endPointProducto + '/' + _id)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }

    getSearchProducto(termino: string) {
      return this.httpClient.get(this.endPointProducto + '/search/' + termino)
      .pipe(
        map((res: any) => {
          return res
        })
      )
    }

    postProducto(producto: object) {
      return this.httpClient.post(this.endPointProducto, producto)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }

    putProducto(_id: string, producto: object) {
      return this.httpClient.put(this.endPointProducto + '/' + _id, producto)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }

    deleteProducto(_id: string) {
      return this.httpClient.delete(this.endPointProducto + '/' + _id)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }


}
