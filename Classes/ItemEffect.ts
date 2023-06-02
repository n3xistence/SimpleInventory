// TODO
// add cyclic: string;
/* Trash #        when used reduced by used amount
 * Use Card #     when used go on cooldown
 * Toggle Card #  when used remains on
 * Passive #      always active as long as owned
 */

interface ItemEffect {
  category: string;
  type: string;
  modifier: number;
  target: string;
  // oneTimeUse: string;
  text: string;
}

export default ItemEffect;
