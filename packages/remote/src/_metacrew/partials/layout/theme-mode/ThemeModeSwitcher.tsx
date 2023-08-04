import clsx from 'clsx'
import { KTIcon } from '../../../helpers'
import { ThemeModeComponent } from '../../../assets/ts/layout'
import { ThemeModeType, useThemeMode } from './ThemeModeProvider'

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  toggleBtnClass?: string
  toggleBtnIconClass?: string
  menuPlacement?: string
  menuTrigger?: string
}

const systemMode = ThemeModeComponent.getSystemMode() as 'light' | 'dark'

const ThemeModeSwitcher = ({
  toggleBtnClass = '',
  toggleBtnIconClass = 'fs-1',
  menuPlacement = 'bottom-end',
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  const { mode, menuMode, updateMode, updateMenuMode } = useThemeMode()
  const calculatedMode = mode === 'system' ? systemMode : mode
  const switchMode = (_mode: ThemeModeType) => {
    updateMenuMode(_mode)
    updateMode(_mode)
  }

  return (
    <>
      <div
        className={`form-check form-check-custom form-check-solid form-switch justify-content-center form-switch-mc `}>
        <input
          className='form-check-input'
          type='checkbox'
          name='model.app.sidebar.default.fixed.desktop'
          checked={calculatedMode === 'dark'}
          onChange={() => switchMode(calculatedMode === 'dark' ? 'light' : 'dark')}
        />
      </div>
      {/* end::Menu */}
    </>
  )
}

export { ThemeModeSwitcher }
