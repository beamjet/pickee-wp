<?php
/**
 * Order Item Details
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/order/order-details-item.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

if ( ! apply_filters( 'woocommerce_order_item_visible', true, $item ) ) {
  return;
}
?>
<tr class="<?php echo esc_attr( apply_filters( 'woocommerce_order_item_class', 'woocommerce-table__line-item order_item', $item, $order ) ); ?>">

  <td class="woocommerce-table__product-name product-name">
    <?php
      echo $item->get_name();
      do_action( 'woocommerce_order_item_meta_start', $item_id, $item, $order, false );
      wc_display_item_meta( $item );
      do_action( 'woocommerce_order_item_meta_end', $item_id, $item, $order, false );
    ?>
  </td>

  <td class="woocommerce-table__product-total product-unit-price">
    <?php echo wc_price($item->get_product()->get_price()) ?>
  </td>

  <td class="woocommerce-table__product-total product-quantity">
    <?php echo $item->get_quantity(); ?>
  </td>

  <td class="woocommerce-table__product-total product-total-price">
    <?php echo $order->get_formatted_line_subtotal( $item ); ?>
  </td>

</tr>

<?php if ( $show_purchase_note && $purchase_note ) : ?>

<tr class="woocommerce-table__product-purchase-note product-purchase-note">
  <td colspan="2"><?php echo wpautop( do_shortcode( wp_kses_post( $purchase_note ) ) ); ?></td>
</tr>

<?php endif; ?>
