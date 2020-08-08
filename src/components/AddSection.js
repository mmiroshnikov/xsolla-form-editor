import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Button, Icon, FormGroup } from 'xsolla-uikit';

export function AddSection({handle}) {
  return (
    <FormGroup border='lg'>
    <Button onClick={handle}
    appearance='secondary'
    size='sm'
  >
      <Icon namre='circle-plus'/>
      Add Section
  </Button>
  </FormGroup>
  )
}