import React from 'react';
import { toCurrency } from '../../../../core/number';
import classes from './OrderDetail.module.scss';

export function OrderDetails(props: any) {
  let details = props;
  let detailsList = details.orderDetailed;
  let itemList = detailsList.items;
  let status = detailsList.status;
  let totalValue: number = 0;
  itemList.forEach((item: any) => totalValue += Number(item.price));
  console.log(toCurrency(totalValue));

  return (
    <div className={classes.order}>
      <div className={classes.orderHeader}>
        <span className={classes.heading}> Olá, {detailsList.name}! </span>
        <a href="/logout" className={classes.logout}>Sair</a>
      </div>

      <div className={classes.orderNumber}>
        <span className={classes.heading}>Número do pedido:</span>
        <span>{detailsList.id}</span>
      </div>

      <div className={classes.orderDetails}>
        <span className={classes.heading}> Resumo da compra </span>
        <ul className={classes.productList}>
          {itemList.map((item: any) => (
            <li className={classes.product} key={item.name}>
              <span className={classes.productQtdy}>{item.qty} x</span>
              <span className={classes.productName}>{item.name}</span>
              <span className={classes.productPrice}>
                {toCurrency(item.price)}
              </span>
            </li>
          ))}
        </ul>
        <div className={classes.orderTotal}>
          <span className={classes.heading}>Total</span>
          <span className={classes.orderValue}>R$ {toCurrency(totalValue).substring(2)}</span>
        </div>
      </div>
      
      <div className={status + ' ' + classes.orderStatus}>
        <span className={classes.heading}>Status da compra</span>
        <ul className={classes.status}>
          <li className={status + ' ' + 'statusWait'}>
            Aguardando pagamento
          </li>
          <li className={status + ' ' + 'statusConfirm'}>
            Pagamento aprovado
          </li>
          <li className={status + ' ' + 'statusPrepare'}>
            Pedido em separação
          </li>
          <li className={status + ' ' + 'statusTransport'}>
            Pedido em transporte
          </li>
          <li className={status + ' ' + 'statusDelivered'}>
            Pedido entregue
          </li>
        </ul>
      </div>

      <div className={classes.orderDate}>
        <span className={classes.heading}>Data da Compra:</span>
        <span className={classes.content}>{detailsList.date}</span>
      </div>

      <div className={classes.orderPayment}>
        <span className={classes.heading}>Forma de Pagamento:</span>
        <span>{detailsList.payment_method}</span>
      </div>
    </div>
  );
}
